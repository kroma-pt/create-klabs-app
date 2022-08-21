import { Center, createStyles, Title } from "@mantine/core";

const useStyles = createStyles(() => ({
  container: {
    height: "100vh",
  },
}));

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <Center className={classes.container}>
      <Title>Welcome to KLabs</Title>
    </Center>
  );
}
