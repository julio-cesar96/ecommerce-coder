import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fazendo a requisição POST
        const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: "Post sobre ReactJS",
            body: "Teste para a aula sobre https request",
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (!postResponse.ok) {
          throw new Error(`Erro ao criar post: ${postResponse.status}`);
        }

        const newPost = await postResponse.json();
        console.log("Novo post criado:", newPost);

        // Fazendo a requisição GET para buscar os posts
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
        const data = await response.json();
        console.log("Dados recebidos:", data);

        // Atualiza o estado incluindo o novo post na lista
        setPosts([newPost, ...data]);

      } catch (error) {
        console.error("Erro ao buscar/criar post:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default App;
