"use client";

import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { addComment, fetchComments } from "@/helpers/api";
import { IComment } from "@/helpers/interface";

interface Comment extends IComment {
  id: string;
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
}

const Feedbacks = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const getComments = async () => {
    const res = await fetchComments();
    console.log(res);
    if (res.status === 200) {
      const sorted = [...res.data].sort((a: any, b: any) => {
        const aTime = a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.seconds || 0;
        return bTime - aTime;
      });

      setComments(sorted);
    }
  };

  useEffect(() => {
    getComments();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await addComment(formData);
    console.log(res);
    if (res.status === 200) {
      setComments(res.data);
      setFormData({ name: "", comment: "" });
    }
  };

  const isDisabled = !formData.name.trim() || !formData.comment.trim();

  console.log(comments);
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          gap: 2,
          height: "40vh",
          mt: 5,
          overflowY: "auto",
          justifyContent: "center",
        }}
      >
        {comments.length > 0 ? (
          comments.map((c: any) => (
            <p key={c.id}>
              {c.name}: {c.comment}
            </p>
          ))
        ) : (
          <p>No comments yet. Be the first to leave a comment!</p>
        )}
      </Box>
      <Box
        sx={{
          width: "50vw",
          overflow: "hidden",
          backgroundColor: "#f0f0f0",
          padding: 2,
          color: "#333",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          gap: 4,
        }}
      >
        <p>Leave a comment</p>
        <TextField
          id='outlined-basic'
          label='Name'
          variant='outlined'
          name='name'
          value={formData.name}
          onChange={handleChange}
          sx={{
            width: "100%",

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#888",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiInputBase-input": {
              fontFamily: "Boldonse",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontFamily: "Boldonse",
              fontSize: "12px",
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
          }}
        />
        <TextField
          id='outlined-basic'
          label='Comment'
          variant='outlined'
          name='comment'
          value={formData.comment}
          onChange={handleChange}
          sx={{
            width: "100%",

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#ccc",
              },
              "&:hover fieldset": {
                borderColor: "#888",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiInputBase-input": {
              fontFamily: "Boldonse",
              fontSize: "14px",
            },
            "& .MuiInputLabel-root": {
              fontFamily: "Boldonse",
              fontSize: "12px",
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
          }}
        />
        <Button
          variant='contained'
          onClick={handleSubmit}
          disabled={isDisabled}
          sx={{
            width: "100%",
            fontFamily: "Boldonse",
            backgroundColor: "#333",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Feedbacks;
