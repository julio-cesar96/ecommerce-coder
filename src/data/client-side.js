async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log("Dados recebidos:", data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }
  
  fetchData();