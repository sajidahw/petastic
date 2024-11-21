import { React, useState } from "react";
import { Avatar, Box, Button, FormLabel, Stack } from "@mui/material";

const ImageUpload = ({ petImage, setPetImage, petName }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Validate file size (e.g., max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("File size exceeds 2MB");
      return;
    }

    if (file) {
      setPetImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your upload logic here, e.g., send the file to the server
    console.log("File submitted:", petImage);
  };

  return (
    <Stack direction="column" spacing={1} sx={{ pt: 2 }}>
      <FormLabel id="petImage" sx={{ fontWeight: "bold", pt: 1 }}>
        Pet Profile Photo:
      </FormLabel>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        {/* File Input (Hidden) */}
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="upload-button"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="upload-button">
          <Button variant="contained" component="span">
            Upload Profile Picture
          </Button>
        </label>

        {/* Image Preview */}
        {preview && (
          <Box mt={2}>
            <img src={preview} alt="Profile Preview" width="200" />
          </Box>
        )}
      </Box>

      <FormLabel id="petImage" sx={{ fontWeight: "bold", pt: 3 }}>
        Avatar Preview:
      </FormLabel>
      {/* Avatar Preview */}
      {preview && (
        <Box
          row
          mt={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Avatar
            alt={petName}
            src={preview}
            sx={{ width: 110, height: 110, alignContent: "center" }}
          />
        </Box>
      )}
    </Stack>
  );
};

export default ImageUpload;
