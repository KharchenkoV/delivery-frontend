import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/AuthComponents/LoginComponent';
import Navbar from './components/NavBar/NavbarComponent';
import ProductList from './components/ProductListComponent/ProductListComponent';
import Bucket from "./components/BucketComponent/BucketComponent"
import BucketService from './services/bucket.service';
import ProductService from './services/product.service';
import AuthenticationService from './services/authentication.service';
import ProductInfo from './components/ProductInfoComponent/ProductInfoComponent';
import OrderLIst from './components/OrderList/OrderLIstComponent';
import OrderDetail from './components/OrderDetailComponent/OrderDetailComponent';
import OrderService from './services/order.service';
import Admin from './components/AdminComponent/AdminComponent';
import RequiredAuth from './components/RequiredAuth';




export default function App() {
  const [bucket, setBucket] = useState({})
  const [orders, setOrders] = useState([])

  useEffect(() => {
    BucketService.getBucket().then(res => {
      setBucket(res.data)
    }).catch(error => {
      console.log(error)
      if (error.response.status === 401) {
        AuthenticationService.logout()
      }
    })
  }, [])

  const loadAllOrders = () => {
    OrderService.getOrders().then(res => {
      setOrders(res.data)
    }).catch(error => {
      console.log(error)
      if (error.response.status === 401) {
        AuthenticationService.logout()
      }
    })
  }

  const loadActiveOrdersForUser = () => {
    OrderService.getActiveOrdersForUser().then(res => {
      setOrders(res.data)
    }).catch(error => {
      console.log(error)
      if (error.response.status === 401) {
        AuthenticationService.logout()
      }
    })
  }

  const addToBucket = (id) => {
    ProductService.addToBucket(id).then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          AuthenticationService.logout()
          window.location.href = 'http://localhost:3000/login'
        }
      })
  }

  const deleteFromBucket = (id) => {
    ProductService.deleteFromBucket(id).then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          AuthenticationService.logout()
          window.location.href = 'http://localhost:3000/login'
        }
      })
  }

  const deleteAllProductFromBucket = (id) => {
    ProductService.deleteAllProductFromBucket(id).then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          AuthenticationService.logout()
          window.location.href = 'http://localhost:3000/login'
        }
      })
  }

  const cleanBucket = () => {
    BucketService.cleanBucket().then(() => window.location.reload())
      .catch((error) => {
        console.log(error)
        if (error.response.status === 401) {
          AuthenticationService.logout()
          window.location.href = 'http://localhost:3000/login'
        }
      })
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar amountProducts={bucket.amountProducts} />}>
          <Route index element={<ProductList addToBucket={addToBucket} />} />
          <Route path='/login' element={<Login />} />
          <Route element={<RequiredAuth allowedRole={'USER'} />}>
            <Route path='/bucket' element={<Bucket
              bucket={bucket}
              addToBucket={addToBucket}
              deleteFromBucket={deleteFromBucket}
              deleteAllProductFromBucket={deleteAllProductFromBucket}
              cleanBucket={cleanBucket}
            />} />

            <Route path='/product/:id' element={<ProductInfo addToBucket={addToBucket} />} />
            <Route path='/orders' element={<OrderLIst orders={orders} loadOrders={loadActiveOrdersForUser} />} />
            <Route path='/order/:id' element={<OrderDetail />} />
          </Route>
          <Route element={<RequiredAuth allowedRole={'ADMIN'} />}>
            <Route path='/admin' element={<Admin orders={orders} loadOrders={loadAllOrders} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


