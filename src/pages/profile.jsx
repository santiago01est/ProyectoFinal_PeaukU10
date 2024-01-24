import styled from "styled-components";
import TextField from "../components/textfield";
import { ButtonCommon } from "../components/buttons";
import React, { useState, useEffect } from "react";
import { TextTitle } from "../components/texts";
import { getRolUser, login } from "../services/auth";

const ContainerMain = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: start;

  @media (max-width: 768px) {
    height: auto;
  }
`;
const ProfileContainerSC = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  margin-top: 80px;
  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
  }
`;

const ContainerOneDataResponsive = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerDataCreatePlan = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
    height: 40%;
  }
`;

const ContainerCoverImageCreatePlan = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ContainerFormContentSC = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImgCoverSC = styled.img`
  width: 100%;
  height: 60%;
  background-color: #ffffff;
  object-fit: cover;
  border-radius: 5%;

  @media (max-width: 768px) {
    height: 300px;
  }
`;

/* tabla */
const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeaderCell = styled.th`
  border-bottom: 2px solid orange;
  padding: 8px;
  font-weight: 500;
`;

const TableCell = styled.td`
  padding: 8px;
  
`;

const InputRadio = styled.input`
  margin-right: 4px;
  margin-left: 10px;
  accent-color: orange;
`;

const Profile = () => {
  /* Si es admin trae los viajes para poner crear un plan */
  const [travel, setTravel] = useState([]);

  if (getRolUser() === "admin") {
    /*
            useEffect(() => {
                const fetchData = async () => {
                  try {
                    const travelData = await getTravelData();
                    setTravel(travelData);
                  } catch (error) {
                    console.error('Error getting travel data:', error);
                    
                  }
                };
            
                fetchData();
              }, []);
              */

    useEffect(() => {
      const fetchData = async () => {
        try {
          const travelsquemado = [
            {
              id: 1,
              city: "Madrid",
              country: "Spain",
              price: 850,
              discount: 950,
              score: 4.8,
              imgPath: "/img/imgcard04.png",
            },
            {
              id: 2,
              city: "Firenze",
              country: "Italy",
              price: 750,
              discount: 850,
              score: 4.5,
              imgPath: "/img/imgcard02.png",
            },
            {
              id: 3,
              city: "Paris",
              country: "France",
              price: 599,
              discount: 699,
              score: 4.4,
              imgPath: "/img/imgcard01.png",
            },
            {
              id: 4,
              city: "London",
              country: "Uk",
              price: 850,
              discount: 950,
              score: 4.8,
              imgPath: "/img/imgcard03.png",
            },
          ];
          setTravel(travelsquemado);
          console.log(travelsquemado);
        } catch (error) {
          console.error("Error getting travel data:", error);
        }
      };

      fetchData();
    }, []);
  }

  /* use state para crear un plan y manejar errores de entrada */
  const [planCreateData, setPlanCreateData] = useState({
    idTrip: "",
    name: "",
    description: "",
    days: "",
    price: "",
    url: "",
  });

  const [tripInfo, setTripInfo] = useState("");
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [daysError, setDaysError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [urlError, setUrlError] = useState("");

  /** Tabla de viajes ** */
  const [selectedTrip, setSelectedTrip] = useState("");

  const handleTripSelection = (tripId) => {
    setSelectedTrip(tripId);
    setPlanCreateData((prevData) => ({
      ...prevData,
      idTrip: tripId,
    }));
  };

  const handleCreatePlanSubmit = (e) => {
    e.preventDefault();

    if (!selectedTrip) {
      setTripInfo("Enter the trip");
      return;
    } else {
      setTripInfo("");
    }

    if (!planCreateData.name) {
      setNameError("Please enter the name of the plan");

      return;
    } else {
      setNameError("");
    }
    if (!planCreateData.description) {
      setDescriptionError("Please enter the description of the plan");

      return;
    } else {
      setDescriptionError("");
    }
    if (!planCreateData.days) {
      setDaysError("Enter the number of days");

      return;
    } else {
      setDaysError("");
    }
    if (!planCreateData.price) {
      setPriceError("Please enter a price");

      return;
    } else {
      setPriceError("");
    }

    if (!planCreateData.url) {
      setUrlError("Please enter a url");

      return;
    } else {
      setUrlError("");
    }

    // Si todos los campos son válidos, enviar los datos al backend
    console.log("plan data:", planCreateData);
    // TODO: sendDataSignUp(signupData);
  };

  const handleCreatePlanChange = (e) => {
    const { name, value } = e.target;
    setPlanCreateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {getRolUser() === "client" ? (
        <> </>
      ) : (
        <ContainerMain>
          <ProfileContainerSC>
            <ContainerOneDataResponsive>
              <ContainerDataCreatePlan>
                <ContainerFormContentSC>
                  <div style={{ width: "100%", marginTop: "30px" }}>
                    <TextTitle>Create travel plan</TextTitle>
                    <form
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                        gap: "20px",
                        marginTop: "20px",
                      }}
                      onSubmit={handleCreatePlanSubmit}
                    >
                      <TableContainer>
                        <label style={{ marginTop: "20px", marginBottom: "10px" }}>
                          Select a Trip:
                        </label>
                        <Table>
                          <thead>
                            <tr>
                            <TableHeaderCell>Select</TableHeaderCell>
                              <TableHeaderCell>City</TableHeaderCell>
                              <TableHeaderCell>Country</TableHeaderCell>
                              <TableHeaderCell>Price</TableHeaderCell>
                              
                            </tr>
                          </thead>
                          <tbody>
                            {travel.map((trip) => (
                              <tr key={trip.id}>
                                 <InputRadio
                                    type="radio"
                                    name="selectedTrip"
                                    value={trip.id}
                                    checked={selectedTrip === trip.id}
                                    onChange={() =>
                                      handleTripSelection(trip.id)
                                    }
                                  />
                                <TableCell>{trip.city}</TableCell>
                                <TableCell>{trip.country}</TableCell>
                                <TableCell>{trip.price}</TableCell>
                                <TableCell>
                                 
                                </TableCell>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </TableContainer>
                      {tripInfo && (
                        <p style={{ color: "orange", textAlign: "start" }}>
                          {tripInfo}
                        </p>
                      )}

                      <TextField
                        label={"Name:"}
                        type={"text"}
                        name={"name"}
                        value={planCreateData.name}
                        onChange={handleCreatePlanChange}
                        placeholder={"Enter the name of the plan"}
                      />
                      {nameError && (
                        <p style={{ color: "orange" }}>{nameError}</p>
                      )}

                      <TextField
                        label={"Description:"}
                        type={"text"}
                        name={"description"}
                        value={planCreateData.description}
                        onChange={handleCreatePlanChange}
                        placeholder={"Enter the description of the plan"}
                      />
                      {descriptionError && (
                        <p style={{ color: "orange" }}>{descriptionError}</p>
                      )}

                      <TextField
                        label={"Days:"}
                        type={"number"}
                        name={"days"}
                        value={planCreateData.days}
                        onChange={handleCreatePlanChange}
                        placeholder={"Enter the number of days"}
                      />
                      {daysError && (
                        <p style={{ color: "orange" }}>{daysError}</p>
                      )}

                      <TextField
                        label={"Price:"}
                        type={"number"}
                        name={"price"}
                        value={planCreateData.price}
                        onChange={handleCreatePlanChange}
                        placeholder={"Enter the price"}
                      />
                      {priceError && (
                        <p style={{ color: "orange" }}>{priceError}</p>
                      )}

                      <TextField
                        label={"Url:"}
                        type={"text"}
                        name={"url"}
                        value={planCreateData.url}
                        onChange={handleCreatePlanChange}
                        placeholder={"Enter the url of the image"}
                      />
                      {urlError && (
                        <p style={{ color: "orange" }}>{urlError}</p>
                      )}
                    </form>
                  </div>
                </ContainerFormContentSC>
              </ContainerDataCreatePlan>
              <ContainerCoverImageCreatePlan>
                <ContainerFormContentSC>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      marginTop: "30px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      justifyContent: "start",
                      gap: "20px",
                    }}
                  >
                    <label style={{ width: "100%" }}>Cover Image</label>
                    <ImgCoverSC
                      src={
                        planCreateData.url && planCreateData.url !== ""
                          ? planCreateData.url
                          : "/img/img-london.png"
                      }
                    ></ImgCoverSC>
                  </div>
                </ContainerFormContentSC>
              </ContainerCoverImageCreatePlan>
            </ContainerOneDataResponsive>
            <div
              style={{
                width: "90%",
                margin: "30px",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <ButtonCommon
                type="submit"
                text="Create"
                typeForm="fill"
                onClick={handleCreatePlanSubmit}
              />
            </div>
          </ProfileContainerSC>
        </ContainerMain>
      )}
    </>
  );
};
export default Profile;
