import { ProductsProvider } from './productsContext';
import { UserProvider } from './userContext';

export const AppContextProvider = ({ children }) => {
  return (
    <UserProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </UserProvider>
  );
};
