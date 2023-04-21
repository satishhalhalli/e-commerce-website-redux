import ProductItem from './ProductItem';
import classes from './Products.module.css';
const Dummy_Products=[
  {id : 'p1', price : 1 , description : 'myfirstLove'},
  {id : 'p2', price : 10 , description : 'myfirstLovesneha'},
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product) =>(
                <ProductItem
                key={product.id}
                id={product.id}
                price={product.price}
                description={product.description}
              />
        )

        )}
       
      </ul>
    </section>
  );
};

export default Products;
