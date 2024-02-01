import axios from 'axios';

(async () => {
  function delay(time: number): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });

    return promise;
  }

  function getProducts() {
    const promise = axios.get(
      'https://api.escuelajs.co/api/v1/products?limit=5&offset=0'
    );
    return promise;
  }

  console.log('---'.repeat(10));
  const response = await delay(3000);
  console.log(response);

  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products?.data);
})();
