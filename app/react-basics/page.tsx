import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import Todo from "../../component/react-basics/todoApplication";
import Counter from "../../component/react-basics/counterApplication";
import ProductSearch from "../../component/react-basics/productSearch";
import ShowHidePassword from "../../component/react-basics/ShowHidePassword/ShowHidePassword";
import DarkLightMode from "../../component/react-basics/toggleDarkLightMode/DarkLightMode";
import FormValidation from "../../component/react-basics/formValidation/FormValidation";

const ReactBasics = () => {
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
          React Basics
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: 17,
            mb: 5,
          }}
        >
          Practical examples to understand the fundamentals of React.
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
          }}
        >
          <Counter/>
          <Todo/>
          <ProductSearch/>
          <ShowHidePassword/>
          <DarkLightMode/>
          <FormValidation/>

        </Box>

      </Container>
    </Box>
  );
};

export default ReactBasics;