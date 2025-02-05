async function checkUpdates() {
    let hasNewData = false;
  
    while (!hasNewData) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=1');
        const data = await response.json();
        
        if (data.length > 0) {
          console.log("Nova informação recebida:", data);
          hasNewData = true; // Para o loop quando novos dados aparecem
        } else {
          console.log("Sem novos dados, tentando novamente...");
          await new Promise(resolve => setTimeout(resolve, 5000)); // Espera 5 segundos antes da próxima consulta
        }
      } catch (error) {
        console.error("Erro ao verificar atualizações:", error);
      }
    }
}

checkUpdates();