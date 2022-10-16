import cookie from "js-cookie";

export default function Home({ token }) {
  return (
    <main>
      <h1>Cookies</h1>
      <p>Here is the TOKEN: {token}</p>
      <button
        onClick={() => {
          // cookie.set("token", "some_stuff", { expires: 1 / 24 });
          fetch("api/login", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: "some_data" }),
          });
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          cookie.remove("token");
          //   fetch("api/logout", {
          //     method: "post",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify({}),
          //   });
        }}
      >
        Logout
      </button>
    </main>
  );
}

export async function getServerSideProps({ req, res }) {
  return {
    props: { token: req.cookies.token || "" }, // will be passed to the page component as props
  };
}
