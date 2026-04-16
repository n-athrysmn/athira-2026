import { db } from "@/lib/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export async function POST(req: Request) {
  const body = await req.json();

  await addDoc(collection(db, "comments"), {
    name: body.name,
    comment: body.comment,
    createdAt: new Date(),
  });

  return Response.json({ success: true });
}

export async function GET() {
  const snapshot = await getDocs(collection(db, "comments"));

  const comments = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return Response.json(comments);
}
