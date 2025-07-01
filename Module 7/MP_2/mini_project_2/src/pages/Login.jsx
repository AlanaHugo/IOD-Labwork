import Login from "../components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login to your account
        </Typography>
        <Login />
      </Box>
    </>
  );
}
