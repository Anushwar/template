import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { StarBorder } from "@material-ui/icons";
import Logo from "../asset/Group 220.png";
import Flower from "../asset/Group 195.png";
import Organic from "../asset/Group 228.png";
import Petal from "../asset/Group 114.png";
import Card from "../asset/Group 207.png";
import CardDark from "../asset/Group 205.png";
import Logo1 from "../asset/Group 39.png";
import Logo2 from "../asset/Group 64.png";
import Logo3 from "../asset/Group 55.png";
import Quotes from "../asset/Group 86.png";
import Woman from "../asset/woman.png";
import Eucalyptus from "../asset/Eucalyptus.png";
import Plants from "../asset/Plants.png";
import Shampoo from "../asset/Shampoo.png";
import Footer from "../asset/Group 229.png";
import LogoW from "../asset/Group 225.png";
import Facebook from "../asset/Group 99.png";
import Linked from "../asset/Group 100.png";
import Instagram from "../asset/Group 105.png";
import LeftPlant from "../asset/Group 134.png";

const useStyles = makeStyles({
  wrapper: {
    fontFamily: "Libre Baskerville, serif;",
    color: "#374b5c",
  },

  header: {
    margin: "0 0 99.4px",
    padding: "30px 117px 106px 139px",
    background: "linear-gradient(to bottom, #f1fefe, rgba(241, 254, 254, 0))",
    color: "#374b5c",
    textAlign: "center",
  },

  font: {
    fontWeight: "bold",
    padding: ".2em",
  },

  section: {
    paddingTop: "177px",
  },

  Organic: {
    position: "relative",
    width: "350px",
    height: "340px",
    top: "70px",
    left: "100px",
  },

  Flower: {
    position: "absolute",
    width: "419px",
    height: "570px",
    right: "100px",
  },

  sidebar: {
    position: "absolute",
    height: "1293px",
    top: "1000px",
    right: "1380px",
  },
});

function App() {
  const styles = useStyles();

  return (
    <Grid container className={styles.wrapper}>
      <Grid container className={styles.header}>
        <Grid container alignItems="center" justify="center" spacing={4}>
          <Grid container xs={6} alignItems="center" justify="flex-start">
            <Grid items>
              <img src={Logo} alt="" />
            </Grid>
            <Grid items>
              <Typography variant="h4" className={styles.font}>
                organic
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
            <Button> Home </Button>
          </Grid>
          <Grid item xs>
            <Button> Products </Button>
          </Grid>
          <Grid item xs>
            <Button> Blog </Button>
          </Grid>
          <Grid item xs>
            <Button> About Us </Button>
          </Grid>
          <Grid item xs>
            <Button variant="outlined">Contact</Button>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justify="center"
          className={styles.section}
        >
          <Grid
            container
            xs={8}
            alignItems="flex-start"
            justify="flex-start"
            direction="column"
          >
            <Grid item>
              <Typography
                justify="flex-start"
                style={{ fontSize: "36px", paddingTop: "35px" }}
              >
                Healthy Life with
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "50px", fontWeight: "bold" }}>
                Nature Organic
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "20px" }}>
                Vegetables are the edible parts of a plant
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ fontSize: "20px" }}>
                that is used in cooking or can be eaten now.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                style={{
                  width: "220px",
                  height: "54px",
                  borderRadius: "10px",
                  backgroundColor: "#00dbd0",
                  marginTop: "25px",
                }}
              >
                <Typography style={{ fontSize: "18px", color: "#FFF" }}>
                  Explore Now
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid item style={{ position: "relative" }}>
            <img src={Organic} alt="" className={styles.Organic} />
            <img src={Flower} alt="" className={styles.Flower} />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        style={{ paddingTop: "68px", position: "relative" }}
      >
        <img src={LeftPlant} alt="" className={styles.sidebar} />

        <Grid item>
          <img src={Petal} alt="" />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "36px" }}>
            Welcome to Nature
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Typography>
        </Grid>
        <Grid item>
          <Typography>incididunt ut labore et dolore magna aliqua.</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ paddingTop: "82px" }}
      >
        <Grid item style={{ paddingRight: "50px" }}>
          <img src={Card} alt="" />
        </Grid>
        <Grid item style={{ paddingRight: "50px" }}>
          <img src={CardDark} alt="" />
        </Grid>
        <Grid item style={{ paddingRight: "50px" }}>
          <img src={Card} alt="" />
        </Grid>
        <Grid item style={{ paddingRight: "50px" }}>
          <img src={Card} alt="" />
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        style={{
          marginTop: "80px",
          paddingTop: "79px",
          backgroundColor: "#fbfefe",
        }}
      >
        <Grid item>
          <Typography style={{ fontSize: "36px" }}>
            Proudly presented by
          </Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Typography>
        </Grid>
        <Grid item>
          <Typography>incididunt ut labore et dolore magna aliqua.</Typography>
        </Grid>

        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ paddingTop: "100px" }}
        >
          <Grid item style={{ paddingRight: "130px" }}>
            <img src={Logo1} alt="" />
          </Grid>
          <Grid item style={{ paddingRight: "130px" }}>
            <img src={Logo2} alt="" />
          </Grid>
          <Grid item style={{ paddingRight: "130px" }}>
            <img src={Logo3} alt="" />
          </Grid>
          <Grid item style={{ paddingRight: "130px" }}>
            <img src={Logo2} alt="" />
          </Grid>
          <Grid item>
            <img src={Logo1} alt="" />
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ paddingBottom: "18px" }}
        >
          <Grid item>
            <Typography variant="h1">.</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1" style={{ color: "#00dbd0" }}>
              .
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">.</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">.</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        style={{ paddingTop: "101px" }}
      >
        <Grid item style={{ paddingBottom: "30px" }}>
          <img src={Quotes} alt="" />
        </Grid>
        <Grid
          item
          style={{
            height: "100px",
          }}
        >
          <img
            src={Woman}
            alt=""
            style={{ width: "auto", height: "100%", borderRadius: "50%" }}
          />
        </Grid>
        <Grid item style={{ paddingTop: "19px" }}>
          <Typography style={{ fontSize: "26px" }}> Jane Doe </Typography>
        </Grid>
        <Grid item style={{ paddingTop: "17px" }}>
          <StarBorder style={{ color: "#00dbd0" }} />
          <StarBorder style={{ color: "#00dbd0" }} />
          <StarBorder style={{ color: "#00dbd0" }} />
          <StarBorder style={{ color: "#00dbd0" }} />
          <StarBorder style={{ color: "#00dbd0" }} />
        </Grid>
        <Grid item style={{ paddingTop: "20px", fontSize: "16px" }}>
          <Typography>
            Thank you for all the amazing produce and products you deliver each
            week…
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            you make my life so easy an bring goodness into our family eating.
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            I’ve been roasting a lot of brussel sprouts and
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ paddingBottom: "18px" }}
        >
          <Grid item>
            <Typography variant="h1" style={{ color: "#00dbd0" }}>
              .
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">.</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">.</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1">.</Typography>
          </Grid>
        </Grid>

        <Grid item style={{ paddingTop: "210px" }}>
          <Typography style={{ fontSize: "36px" }}>
            Subscribe to Our Newsletter
          </Typography>
        </Grid>
        <Grid item>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Typography>
        </Grid>
        <Grid item>
          <Typography>incididunt ut labore et dolore magna aliqua.</Typography>
        </Grid>

        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ paddingTop: "70px" }}
        >
          <Grid item>
            <Typography style={{ fontSize: "18px", paddingRight: "70px" }}>
              Enter your email address
            </Typography>
          </Grid>
          <Grid item style={{ paddingLeft: "10px" }}>
            <Button
              variant="contained"
              style={{
                width: "170px",
                height: "80px",
                borderRadius: "30px",
                backgroundColor: "#00dbd0",
              }}
            >
              <Typography style={{ fontSize: "18px", color: "#FFF" }}>
                Subscribe
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        style={{ paddingTop: "68px" }}
      >
        <Grid item>
          <img src={Petal} alt="" />
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "36px" }}>Read our Blog</Typography>
        </Grid>
        <Grid item>
          <Typography style={{ fontSize: "16px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </Typography>
        </Grid>
        <Grid item>
          <Typography>incididunt ut labore et dolore magna aliqua.</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ paddingTop: "80px", textAlign: "center" }}
      >
        <Grid item direction="column" alignItems="center" justify="center">
          <Grid items>
            <img
              src={Eucalyptus}
              alt=""
              style={{
                width: "270px",
                height: "175px",
                objectFit: "contain",
                borderRadius: "20px",
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              style={{
                paddingTop: " 18px",
                fontSize: "18px",
                color: "#00dbd0",
              }}
            >
              Blog Post One
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Lorem ipsum dolor sit amet,</Typography>
          </Grid>
          <Grid item>
            <Typography>consectetur adipiscing elit, sed</Typography>
          </Grid>
          <Grid item>
            <Typography>do eiusmod.</Typography>
          </Grid>
          <Grid item style={{ paddingTop: "18px" }}>
            <Typography> Read More</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          direction="column"
          alignItems="center"
          justify="center"
          style={{ paddingLeft: "60px" }}
        >
          <Grid items>
            <img
              src={Plants}
              alt=""
              style={{
                width: "270px",
                height: "175px",
                objectFit: "contain",
                borderRadius: "20px",
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              style={{
                paddingTop: " 18px",
                fontSize: "18px",
                color: "#00dbd0",
              }}
            >
              Blog Post One
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Lorem ipsum dolor sit amet,</Typography>
          </Grid>
          <Grid item>
            <Typography>consectetur adipiscing elit, sed</Typography>
          </Grid>
          <Grid item>
            <Typography>do eiusmod.</Typography>
          </Grid>
          <Grid item style={{ paddingTop: "18px" }}>
            <Typography> Read More</Typography>
          </Grid>
        </Grid>

        <Grid
          item
          direction="column"
          alignItems="center"
          justify="center"
          style={{ paddingLeft: "60px" }}
        >
          <Grid items>
            <img
              src={Shampoo}
              alt=""
              style={{
                width: "270px",
                height: "175px",
                objectFit: "contain",
                borderRadius: "20px",
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              style={{
                paddingTop: " 18px",
                fontSize: "18px",
                color: "#00dbd0",
              }}
            >
              Blog Post One
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Lorem ipsum dolor sit amet,</Typography>
          </Grid>
          <Grid item>
            <Typography>consectetur adipiscing elit, sed</Typography>
          </Grid>
          <Grid item>
            <Typography>do eiusmod.</Typography>
          </Grid>
          <Grid item style={{ paddingTop: "18px" }}>
            <Typography> Read More</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ backgroundColor: "#374b5c", marginTop: "90px", color: "#FFF" }}
      >
        <Grid
          container
          style={{ paddingTop: "80px", paddingLeft: "139px" }}
          alignItems="flex-start"
          justify="center"
          direction="column"
          xs={4}
        >
          <Grid items>
            <img src={LogoW} alt="" />
          </Grid>
          <Grid item style={{ paddingTop: "45px" }}>
            <Typography style={{ fontSize: "14px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: "14px" }}>
              elit, sed do eiusmod tempor
            </Typography>
          </Grid>
          <Grid item style={{ paddingTop: "45px" }}>
            <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>
              Coppyright, 2020 Nature
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ paddingTop: "80px", paddingLeft: "139px" }}
          alignItems="flex-start"
          justify="center"
          direction="column"
          xs={4}
        >
          <Grid item>
            <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
              Information
            </Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: "14px", paddingTop: "32px" }}>
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: "14px", paddingTop: "16px" }}>
              Products
            </Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: "14px", paddingTop: "16px" }}>
              Contat Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography style={{ fontSize: "14px", paddingTop: "16px" }}>
              Terms of Service
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ paddingTop: "80px", paddingLeft: "139px" }}
          alignItems="flex-start"
          justify="center"
          direction="column"
          xs={4}
        >
          <Grid item>
            <Typography>Follow Us</Typography>
          </Grid>
          <Grid item style={{ paddingTop: "23px" }}>
            <img src={Facebook} alt="" />
            <img src={Linked} alt="" style={{ paddingLeft: "23px" }} />
            <img src={Instagram} alt="" style={{ paddingLeft: "23px" }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
