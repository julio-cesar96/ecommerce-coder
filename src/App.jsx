import { collection, getDocs, getFirestore, addDoc, writeBatch, doc } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", price: "" });
  const [batchProducts, setBatchProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado de carregamento

  // Função para buscar produtos do Firestore
  const fetchProductsFromFirestore = async () => {
    setLoading(true);  // Inicia o carregamento
    try {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      const snapshot = await getDocs(itemsCollection);

      if (snapshot.empty) {
        console.log("Sem dados na coleção");
        setLoading(false);  // Finaliza o carregamento
        return;
      }

      const productsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productsList);
      setLoading(false);  // Finaliza o carregamento
    } catch (error) {
      console.error("Erro ao buscar documentos:", error);
      setLoading(false);  // Finaliza o carregamento em caso de erro
    }
  };

  // Chama a função fetchProductsFromFirestore para buscar os produtos ao carregar o componente
  useEffect(() => {
    fetchProductsFromFirestore();
  }, []);

  // Função para adicionar um único produto
  const addProduct = async () => {
    if (!newProduct.title || !newProduct.price) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      await addDoc(itemsCollection, {
        title: newProduct.title,
        price: parseFloat(newProduct.price),
      });

      setNewProduct({ title: "", price: "" }); // Limpar os campos após envio
      fetchProductsFromFirestore(); // Atualizar a lista de produtos
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  // Função para adicionar produtos em lote
  const addProductsBatch = async () => {
    if (batchProducts.length === 0) {
      alert("Adicione ao menos um produto para o lote.");
      return;
    }

    try {
      const db = getFirestore();
      const batch = writeBatch(db);
      const itemsCollection = collection(db, "items");

      batchProducts.forEach((product) => {
        const newDoc = doc(itemsCollection); // Gera um ID automático
        batch.set(newDoc, {
          title: product.title,
          price: parseFloat(product.price),
        });
      });

      await batch.commit();
      setBatchProducts([]); // Limpar a lista de produtos do lote
      fetchProductsFromFirestore(); // Atualizar a lista de produtos
    } catch (error) {
      console.error("Erro ao adicionar produtos em lote:", error);
    }
  };

  return (
    <div>
      <h1>Produtos</h1>
      {loading ? <p>Carregando produtos...</p> : null}  {/* Exibe mensagem de carregamento */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - R$ {product.price}
          </li>
        ))}
      </ul>

      <h2>Adicionar Produto</h2>
      <div>
        <input
          type="text"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          placeholder="Nome do Produto"
        />
        <input
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          placeholder="Preço"
        />
        <button onClick={addProduct}>Adicionar Produto Único</button>
      </div>

      <h2>Adicionar Produtos em Lote</h2>
      <div>
        <input
          type="text"
          placeholder="Nome do Produto"
          onChange={(e) => setBatchProducts([...batchProducts, { title: e.target.value, price: "" }])}
        />
        <input
          type="number"
          placeholder="Preço"
          onChange={(e) => {
            const index = batchProducts.length - 1;
            const updatedBatch = [...batchProducts];
            updatedBatch[index].price = e.target.value;
            setBatchProducts(updatedBatch);
          }}
        />
        <button onClick={addProductsBatch}>Adicionar em Lote</button>
      </div>
    </div>
  );
}

export default App;
