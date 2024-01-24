import styled from 'styled-components'
import '../../styles/footer.css'
import { TextParagraphNormalSmall, TextParagraphNormalSmaller, TextTitle, TitleSection } from '../../components/texts'
import { Colors } from '../../styles/global'
import TextField from "../../components/textfield";
import { ButtonCircle, ButtonCommon } from '../../components/buttons';


const FooterContainerSC = styled.div`
    background-color: #F7F8FC;
    margin: 0 0;
    width: 100%;
    position: relative;
    margin-top: 150px; 
    position: relative;
    height: 70vh;
    //media
    @media (max-width: 768px) {
        height: 90vh;
    }
    `

const FooterContainerContentSuscribeSC = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 50px;
max-width: 1200px;
margin: 0 auto;
padding: 4em 1em;
border-radius: 10px;
background-color: ${Colors.secondary} ;
position: absolute;
top: -80px;
left: 0;
right: 0;
`

const FooterContainerCopyrightSC = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1200px;
margin: 0 auto;
padding: 4em 1em;
position: absolute;
bottom: 0px;
left: 0;
right: 0;
`

const ImgPalmsSC = styled.img`
    width: 100px;
    height: 100px;
    object-fit: fill;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    `

const ImgCirclesSC = styled.img`
width: 30%;
height: 60%;
object-fit: fill;
position: absolute;
bottom: 0;
left: 20px;
z-index: 2;
// media
@media (max-width: 768px) {
    width:90%;

}
`

const FooterContainerContentSC = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1200px;
margin: 0 auto;
padding: 4em 1em;
position: absolute;
bottom: 80px;
top: 400px;
left: 0;
right: 0;

//media
@media (max-width: 768px) {
    flex-direction: column;
}
`

const ContainerEmailSC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primary};
    border-radius: 10px;
    width: 60%;
    z-index: 2;
    padding: 10px 20px;
    gap: 10px;
    // media
    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
    `
const ContainerNetworkSC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width:20%;
    gap: 20px;
    //media
    @media (max-width: 768px) {
        width: 100%;
    }
    `

const ContainerInfoSC = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width:60%;
    background-color: ${Colors.primary};

    table {
    width: 100%;
    background-color: #F7F8FC; /* Puedes cambiar este color al que desees */
    border-collapse: collapse;
  }

  th, td {
    padding: 8px;
    text-align: left;
  }

  th {
   
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #F7F8FC;
  }

  a {
    text-decoration: none;
    color: ${Colors.textGray};
  }

  a:hover {
    text-decoration: underline;
  }

  //media
  @media (max-width: 768px) {
      display: none;
  }
    `


const Footer = () => {

    return (

        <FooterContainerSC>
            <FooterContainerContentSuscribeSC>
                <TitleSection style={{ color: 'white', maxWidth: '60%', textAlign: 'center' }}> Subscribe and get exclusive deals & offer</TitleSection>
                <ImgPalmsSC src="../icons/palms.svg"></ImgPalmsSC>
                <ImgCirclesSC src="/img/ovalos.png"></ImgCirclesSC>
                <ContainerEmailSC>
                    <TextField  placeholder="Enter your email"></TextField>
                    <ButtonCommon style={{ width: '40%' }} text="Subscribe" typeForm={"fill"} />
                </ContainerEmailSC>

            </FooterContainerContentSuscribeSC>

            <FooterContainerContentSC>
                <ContainerNetworkSC>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/img/logo.png" alt="Logo"></img>
                        <TextTitle>Trabook</TextTitle>
                    </div>
                    <TextParagraphNormalSmall>Book your trip in minute, get full
                        Control for much longer.</TextParagraphNormalSmall>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <ButtonCircle
                            pathImg="/icons/Facebook.svg"
                            type="outline"
                        />
                        <ButtonCircle

                            pathImg="/icons/instagram.svg"
                            type="fill"
                        />
                        <ButtonCircle
                            pathImg="/icons/x.svg"
                            type="outline"
                        />
                    </div>

                </ContainerNetworkSC>

                <ContainerInfoSC>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Contact</th>
                            <th scope="col">More</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#">About</a></td>
                            <td><a href="#">Help/FAQ</a> </td>
                            <td> <a href="#">Press Centre</a></td>
                        </tr>
                        <tr>
                            <td> <a href="#">Careers</a> </td>
                            <td><a href="#">Press</a> </td>
                            <td><a href="#">Our Blog</a> </td>
                        </tr>
                        <tr>
                            <td><a href="#">Logistic</a> </td>
                            <td><a href="#"> Affilates</a></td>
                            <td> <a href="#">Low fare tips</a></td>
                        </tr>
                        <tr>
                            <td><a href="#">Privacy & Policy</a> </td>
                        </tr>
                    </tbody>
                </table>
                </ContainerInfoSC>

                

            </FooterContainerContentSC>

   
                <FooterContainerCopyrightSC>
    
            <div>
                Copyright, Trabook 2022. All rights reserved.
            </div>
            <div>
                Terms & Conditions
            </div>
                </FooterContainerCopyrightSC>
          

            
        </FooterContainerSC>


    )
}

export default Footer