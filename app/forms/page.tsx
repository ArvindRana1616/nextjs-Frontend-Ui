"use client";

import { Box, Container, Typography } from "@mui/material";


import MultipleFieldsForm from "../../component/forms/MultipleFieldsForms/MultipleFieldsForms";
import CheckboxRadioForm from "../../component/forms/CheckboxRadioForm/CheckboxRadioForm";
import SelectForm from "../../component/forms/SelectForm/SelectForm";
import EditForm from "../../component/forms/EditForm/EditForm";
import DynamicFields from "../../component/forms/DynamicFields/DynamicFields";

const Forms = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "#F8FAFC",
        py: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="xl">

        <Typography
          sx={{
            fontSize: { xs: 30, md: 42 },
            fontWeight: 900,
            color: "#111827",
            mb: 1,
          }}
        >
          Forms
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: 17,
            mb: 5,
          }}
        >
          Practical examples of commonly used React form patterns
          in real-world applications.
        </Typography>

        {/* Practical Examples */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
            mt: 8,
          }}
        >
          <MultipleFieldsForm />
          <DynamicFields />
          <CheckboxRadioForm/>
          <SelectForm/>
          <EditForm/>
        </Box>

      </Container>
    </Box>
  );
};

export default Forms;