import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
   MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import {Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import React from "react";

export default function Cart() {
  const cartData = JSON.parse(localStorage.getItem("DieselCart")) || [];
  const buyNowData = JSON.parse(localStorage.getItem('DieselBuyNow')) || [];
  //const [quantity , setQuantity] = useState(1);
  const handlBuyNow=(data)=>{
    buyNowData.push(data);
    localStorage.setItem('DieselBuyNow' , JSON.stringify(buyNowData));
  }
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    {cartData.map((el) => (
      <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol size="12">
          <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
            <MDBCardBody className="p-0">
              <MDBRow className="g-0">
                <MDBCol lg="8">
                  <div className="p-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                        Shopping Cart
                      </MDBTypography>
                      <MDBTypography className="mb-0 text-muted">
                      
                      </MDBTypography>
                    </div>

                    <hr className="my-4" />

                    <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          src={el.img}
                          fluid className="rounded-3" alt="Cotton T-shirt" />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <MDBTypography tag="h6" className="text-muted">
                          {el.brand}
                        </MDBTypography>
                        <MDBTypography tag="h6" className="text-black mb-0">
                         {el.title}
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                        <MDBBtn color="link" className="px-2">
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>
                        <MDBBtn color="link" className="px-2">
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="text-end">
                        <MDBTypography tag="h6" className="mb-0">
                         {el.seeling_price}
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <Link to='/'>
                          <MDBIcon fas icon="times" />
                          </Link>
                        
                      </MDBCol>
                      <MDBTypography>
                        {el.discrption}
                        </MDBTypography>
                    </MDBRow>

                    <hr className="my-4" />
                    <div className="pt-5">
                      <MDBTypography tag="h6" className="mb-0">
                        <Link to='/'><MDBCardText  className="text-body">
                        <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                        to shop
                      </MDBCardText></Link>
                      </MDBTypography>
                    </div>
                  </div>
                </MDBCol>
                <MDBCol lg="4" className="bg-grey">
                  <div className="p-5">
                    <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                      Summary
                    </MDBTypography>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-4">
                     
                     
                    </div>



                    <div className="mb-4 pb-2">
                      
                    </div>

                    

                   

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between mb-5">
                      <MDBTypography tag="h5" className="text-uppercase">
                        Total price
                      </MDBTypography>
                      <MDBTypography tag="h5">{el.seeling_price}</MDBTypography>
                    </div>

                    <Link to='/buynow'><Button color="dark" block size="lg" onClick={()=> handlBuyNow(el)}>
                    Buy Now
                   </Button></Link>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      ))}
     
    </section>
  );
}