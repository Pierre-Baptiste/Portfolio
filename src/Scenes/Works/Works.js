import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import WorkCard from "./Components/WorkCard";

import Circle from "@material-ui/icons/Brightness1";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginTop: "30px",
    marginBottom: "30px",
    fontWeight: "700",
    fontSize: "27px"
  },
  subtitleBox: {
    maxWidth: "800px",
    padding: "0 30px",
    margin: "auto",
    marginBottom: "60px"
  },
  workCardBox: {
    maxWidth: "950px",
    padding: "0 30px",
    margin: "auto"
  },
  article: {
    color: "secondary",

    padding: "0 20px",
    marginBottom: "10px",
    textAlign: "justify"
  },
  articleTitle: {
    fontFamily: "Roboto",
    fontSize: 20,
    padding: "0 20px",
    marginTop: "40px",
    marginBottom: "10px",
    textAlign: "justify"
  },
  articleEnd: {
    fontFamily: "Roboto",
    fontSize: 20,
    padding: "0 20px",
    marginTop: "60px",
    textAlign: "center",
    color: "#001aff",
    marginBottom: "40px"
  },
  imageElement: {
    maxWidth:"500px",
    width: "100vw",
    display: "block",
    margin: "auto"
  },
  eqElement: {
    maxWidth:"400px",
    display: "block",
    margin: "auto"
  },
  firstLetter: {
    fontFamily: "unifrakturmaguntia, fantasy",
    fontSize: "50px",
    float: "left",
    lineHeight: "1",
    paddingRight: "7px"
  }
}));

export default function Presentation(props) {
  const classes = useStyles();

  if (props.Language === "English") {
    return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 02 : Works |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            Here is a showcase of my most relevant projects. They include some
            personal ones as well as some school related ones. You can learn
            more about them by clicking on the "Plus" button, I try to give some
            more details about each one and, in team projects, I focus mainly on
            my input.
          </Typography>
        </Box>
        <Box className={classes.workCardBox} align="center">
          <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={
                  "https://lh3.googleusercontent.com/xe8tiAiOqmG_zBZPgPGj4DMp5BCZhrr8frnM5VJncuz5IuAxdcREQcmPyYRc9c8AGsCpmvEtesuC3FA5ITVK8M7VR-dnapD1dN7FzR32f_ocfFHrpXKu74Wr_v7AusKKY5R464EtsRpL2pBLVFgDZT6D9QFderw7M_e-TbtUXNfJnSl6p7zk2cQO2KGKZmnBAG8faRJjEGGRKZhjRrDLnOSOxc9swOBYnxgu4Huab-OMi8MNlEbKJ57q2Nh5B35AHDDZfWMrPemIbtHlD9lgbW1HwBuJH0yolQdWNKH3PxgUBo90v1h8XySMhiZ3Xjz0eX-Enc_Dpe71a14YlwY6zJdawFMVpuDPlSWjteBsSQ5XzEgrP11k8psTSG6fnsiWyDcG_sIpE7GhIr1XSFN66J3T-xfNjkRji6jTwk3AZhQ8Pb_mphN8FnTJY0qkj8xRqFjhmoBn4ENlWPTGfaXyEf5IsVCZcgKFG2wyl8gz2EAeGOzIEnz5JFEYI58eZ0Mu-nReu6WLXnFnWDz1G483Vg87Bry1jb7qI3GK-mPnOEiUxWM8sOYvIFF9dLqyTgxmIKreOkAXEsaXJGyr3gVdWIBvKxMV_XsDItwoj5BAFQ5Cor5hV_CebQvL5Uz3LWI__HCd7J9a5Dd5RAQxnUtJblp-ukgSHUwiQvD2OUIA2u4X_xSRXbegsX4_WZWYv1FbVvhot9LQiL-OoqRxXAw4Z-bqPJGpuE-EMOQ_mSmtxdrCNUY=w500-h429-no"
                }
                imageTitle="Picture of myself"
                date="2019"
                title="Personal Website"
                subTitle="Personal Project"
                description="From the design perspective to the content and purpose of it"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>T</span>
                  his is my personal website. After I started creating it I
                  realized how difficult of a client your self can be. But
                  overall it has been a fun and educational project. I deepened
                  my knowledge of React.js and deployment processes. I also got
                  acquainted with SEO.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #01 - ABOUT THIS PROJECT
                </Typography>
                <Typography className={classes.article}>
                  I assume that in almost every company that I will be applying
                  for a job, there would be a fierce competiton. As it is better
                  to be ready than sorry, I created this website along with my
                  personal branding to showcase my awesome work.
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/o8PD3sh4JN9RN5Ea3KZc5p_T4jxK1EVhOw_JlNHlg87_4H8JDOjC1NLak9M-ggurQ8-NCoo1HERyrEBWgz4InXaKtpvcR-RGXLk82kS3MAvyW3ylhKbYjLvtNCWPbod87Sivb7ioy16XI9CZ5EiyT6q0uZjJMm_vkiPKVo7ktleS0poZNj4dmCPxd06dlA03lJ1YfUO6aW-ykSOWJe8eY-DfUTh01k12gcCFl0HK6IjfK6nw2vMndTfnOGv_lnCbCef2Soa3nFlfmV_T38jC_qTxhTqBZ0ECTwLF7YQYHhkVliyE04DtVAxPXR41FKg1TTC_0FWtdL2mTOwmNVMWrBsUVDzkOPL0iJSMHJPS_o5CXY8PmF3JLkFOLLzIe_Xm7JCTeOFEOAcX1LwUk_NNKti9_PDGHZ1DpgbzMXhlx2qDPrGjvXDcVgA0-gkeW0q2KD6KZMCvzAH7rKers5BOU3PBO77I-cSyHODvTdQFY-qCRFBtD6CCD0kh8jdULytLLMhPRgLD9mTryeQcaU332-jlDR9Z30iP423w_Fwssj1iXiptgJ09wB-Ip0npyXVVfKfWFIbVCPmX_Z5HHGHeHTpaVdqhrcNrNAYAzZ-Ocblyck0agjHtojWVGUaDmNuIH78UEcYjDEhJWg4DhM_vavJ9IJZYoikq9MTYceHa-L7JblhIl6kC7g=w888-h666-no"
                  }
                  alt="Landing of website"
                  className={classes.imageElement}
                />
                <Typography className={classes.articleTitle}>
                  #02 - THE PROCESS
                </Typography>
                <Typography className={classes.article}>
                  Conceptualizing and developing started around late June of
                  this year (2019). I started mind-mapping to help break down my
                  brand to it's truest form and from there I started
                  experimenting out ideas. There were a lot of paths for me to
                  chose considering my tastes but day-by-day, I ditched dead end
                  iterations and built off others eventually coming to a
                  conclusion that suited me best.
                  <br />
                  The basis of the wireframe is "Simplicity & Elegance"
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/1RvZI5ixQMORqWnoBW3uDiBOZvYzn8nrVhFxFJTjU_tFobwzQ8w9EL7xouJX3lnzyKHyBZ-9wQovR1-7R500502OW9CQIu6hI5t4A4rKU21kQ38RS-TzlnX3ULNekxhWhYjZCrQ8I8qBQIBgNk4EyXZGH6FmiRBvmZqBRcrX46SP4br24zrijXD8P7-9-EXGXcz7rPmnTLiwd7VdNusej8i_l767XpRLMGllmzln_Nr9gVneEQbHaaOFkcihLtanXI0fi0KEGKE8Yfh9g6kyb9WSCoJm7mH6eQGIcug-Ur0bVfaOFGzumcjtqGyWi9U5lfsuzRHcYdYfXyZ6V4R6NfaikJ0wboDzKLzqyoID-QizMywuNXGsJwEXnSQTQabdOj6OYHDwmnGOWPUYFjWMzsJSc7EZlFeNFKV3uaRbWDpFYAhHXiCQI4lxIIzRxEO-VmxbJiTEDcW6HkTpAPg7jcnPU8lPvJd_1X_gp578fleLENPqE-lt-LzSfF34NTgl0DAS3b9AvgGo7V7CYX-YF4Cufg1EgDFB6YlpZ5VgBC49mpjm65jgXFDQEKv9VquwYH4ywrhB6poZbnG1zvDDYPekJD7r7DfVg064L8Ek2eokBIquS9ZloM8m-94-P8n9QvYjxbO-XsedjlV1A0lSiTRytamQYef8DaCse6aeNHlTu4uKfgRAZQ=w500-h319-no"
                  }
                  alt="Wireframe Landing page"
                  className={classes.imageElement}
                />
                <Typography className={classes.articleTitle}>
                  #03 - FONTS & COLORS
                </Typography>
                <Typography
                  className={classes.article}
                  style={{ fontFamily: "Roboto", textAlign: "right" }}
                >
                  Roboto Bold
                  <br />
                  The quick brown fox jumps over the lazy dog
                  <br />
                  0123456789
                </Typography>
                <Typography className={classes.article}>
                  Monospace
                  <br />
                  The quick brown fox jumps over the lazy dog
                  <br />
                  0123456789
                </Typography>
                <Typography
                  className={classes.article}
                  style={{ textAlign: "right" }}
                >
                  <Circle style={{ color: "#000000" }} /> #000000
                  <br />
                  <Circle style={{ color: "#001aff" }} /> #001aff
                  <br />
                  <Circle style={{ color: "#f0f0f0" }} /> #f0f0f0
                </Typography>
                <Typography className={classes.articleTitle}>
                  #04 - RESPONSIVE DESIGN
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/4S-HggW-4CpLMgFa2d3dUjowTdtdu4Li4pxWXtGC_Cs-rWqinSaAxg9znyNPRowjUl6ILUvbOZIkUF1XbqfqyMbHJp8lDkQGN81jz5LkG9kBJlJw0L8Ya3uCq6UdJlFy10r8iX5-E7zSIyFGflxdQflwQU04MjhHYIwL7yoYrhAYgk41gT2m41YFmldPGD_zsdz_EIGAUZObFPLQOSDIV_g02UtE-BV4KadD5VbSX-sk5AHWI9ysMg6fPW7xSfiRp4Plh2WkeDhUdsTJIOGgX4qssq0BGKJYx02Y9n6539xB0rmvNd-GoCkv14YP3GTDOCxgsy9_ouR1vRNMQRor7UtXx9cod24VJCP8ZaFUy9UiBYjWB1S9KPKvpYi4CzOHv073rAl2u3SafuCXCJuwp6ibJeoUuEVxshsfJMSniBXzvmjYTqwKgj1bUbF5oaqqU_3i1s25P3RgRjx9GuAvrvP1pU97Ag68kGB0vXrvYmLWj-VidSTZWvhPv5x67iRVRPwshzviwQ_d-7yc7KBxUORtQXQ68i2-WV_S3a5Pbch7VVZEf6RocX9YBz3xX5uYt6UmIa29hORRYfysNCxyMAXoRG4CbRNjBMoOmKAXyLLG5CodWz5m-1VV5dzz9G_HYu09kbALqFG3NNZchYcOlPvCoBKS0egzGuFfgsVw1dAB5ENTQhuX0A=w860-h666-no"
                  }
                  alt="Mobile responsive"
                  className={classes.imageElement}
                />
                <Typography className={classes.articleEnd}>
                  #THANK YOU FOR READING
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={
                  "https://lh3.googleusercontent.com/ZCI5LyW-EwozIjEJq2fAXaX9UYyL4jv-T_UScYPnLAdpYpqqArNQvfnQYasxnPLkmAyL5ZIlpeI3OfxeLeGPXyyLa4HgnuDBkdmS5ly8q7GOwd66xyskcx7JTyWP3Ka71b71xKdLYKKi6G_dXiw36LNtetmIbxt-wnggMzeLPF7IkKH-6_gYFyqcP4yfmqbE8iTHP66QZObjMMllQIdfM3hRBm8jLkO--w7yan89p04WVuspHJTx1hHjRvb8bDciBR_mIAXBG-R_0JDM-yg-YqebOt5tnSPrLF7-UqZe0gfMOabUxIp9-8ZFohUKwFku8aeV7EO0iizDmX20NZimBQ9Y1NcG9E6L8jUJCmAGZqcAWOgUFZo0I_8ccNSFb-d7LZ_49k6BtS5F9WqHGx62vXM77_6p3ibsft62bHyervH16eZgocOy2TseGRokD7FBqYoQVng3rk5fU7mefJvJEJwfZfWOY4tdXzkqcbz_HxoxIN6UuVlcxIBrFfnNPxXpC16O29JvYo2cFkEQtM4lYMJRc-OpKPN676E-72dEMuOMJOS1cGvvMjAlqN8U4dsWlmDbYDb_QrJa4a1Iz2VeQdEu3U5TgrnwIr2PuLiSVkq0Y1qRxGmRd8U4P3LWb5u1yziFDS_sWhH-P_NhzdlH7aHmaNfgNo385YWvG1V1zLGDjJ8_1WSzd3eTkStDPC28l2p-Ze7EBhhx5Mv_2a1puBGHRgIOxfM2fKsHZ5aUpBhk-QI=w920-h408-no"
                }
                imageTitle="SKZ image"
                date="2019"
                title="SKZ"
                subTitle="Team member"
                description="Annual school ski trip gathering 1400 students"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>O</span>
                  ne week at the winter sports for Arts & Métiers engineering
                  students that took place from january the 19th to the 26th of
                  2018. Skiozarts (SKZ) celebrated its 30th edition last year
                  with the aim of perpetuating a major challenge: bringing 1400
                  students together in a major alpine resort in the middle of
                  January, which is the largest student ski event in Europe.
                </Typography>
                <Typography className={classes.article}>
                  Important figures:
                  <ul>
                    <li>Budget of €600k</li>
                    <li>Organizing team of 20 people</li>
                    <li>9 months of planning</li>
                  </ul>
                </Typography>
                <Typography className={classes.article}>
                  I was responsible for all the graphical aspect of the event.
                  From establishing the design guidelines to the design of the
                  merchandizing. My most relevant work will be presented below.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #01 - THE LOGO
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/pW_jaf9Adk1gF_Mog9JycNEBKSzRu-wPvRe-_ncu-vQfoxWgr0d5N7dt7tQ-7AvEbsA2depJJ4OoMoFvsStVjTmOt04N-vDazAAEbASO5xHsXcQn6Nda0M4ryGK6a3JFrVCFPq0ZWhjQj62zDDHAMsAPLVg_aVP45ZNQji3Oqd4PUSvi9yAl7KUp93EmrIO2BTtGDcggr7JQRathPjWrdyr8XUZF2loz5MxSK1Sbm8NEIVeH6fk6urSulKR2B-WKcLkjP0PJdoIRUNFJzAStQxMLSrE_KOGtpzudUBLPt8DGc_rAwL8nNSNth_B56_OZMbDExmIW9kKve7XJqhQpVyQS2fEByXq7jfqCKor7OQKbBSTz2lbnYto8seYjici2Uxu6j2y8PThlkRrDRE0S6om4KcvrAGRaD4OowBlA_hBOOyF1ZfyOW_gI2hEBbvRCPWEv16mtZ32vLCjN66NCTRA1bv8wmoHuCRN2wEeEJ4KCU-Z-RJWKPSSXsgfUbeYW2_yiLQP9KeqtBW1EvkeddAK45BLKbbkXm_irapmadt_zNf_IyvfxogXBRnysMv-F23tGDxKger214boFz4-xuGNdkP0lTpIV9gfl_YJQciaHVH196PLvZsSvUUSgxWRwk2mrS6Q28ht_FNqBBzOBogpzxEbDL7Zujms3-a6FIhqgHl4pSbykAEWBBT9f2WKbjoo_FDdKWsMkSdXo-dNraBw2-yxZfKTkc_d5hp04B-UNYLA=w920-h400-no"
                  }
                  alt="Logo with construction lines"
                  className={classes.imageElement}
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                />
                <Typography className={classes.article}>
                  Traditionnaly, the logo contains 3 summits embeded in it. With
                  this constraint in mind, I first started to work on the
                  typography. The straight lines, harsh corners and fat typo
                  remind us of the steepness of the mountains and its
                  grandiosity while the roundness of the "S" sweetens the whole.
                </Typography>
                <Typography className={classes.article}>
                  Another challenge was to integrate the 30th edition milestone
                  sign. I choose the negative technique to make it discret but
                  still noticable.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #02 - COLORS
                </Typography>
                <Typography className={classes.article}>
                  In the past few years, the event wore mostly the blue color as
                  it is often associated with the cold icy mountain. To change
                  that and set the difference for the 30th edition, I went down
                  a riskier path with a red to pink gradient.
                </Typography>
                <Typography className={classes.article}>
                  <Circle style={{ color: "#d32027" }} /> #d32027
                  <br />
                  <Circle style={{ color: "#e33c96" }} /> #e33c96
                  <br />
                  <Circle style={{ color: "#d5d8dc" }} /> #d5d8dc
                </Typography>
                <Typography className={classes.articleTitle}>
                  #03 - TRAILER
                </Typography>
                <Typography className={classes.article}>
                  The making of the trailer was my main challenge as I've only
                  had little experience with video editing before. But it also
                  provided me with a project to learn how to.
                </Typography>
                <Typography className={classes.article}>
                  I jumped into it head first, experimenting a lot. After long
                  hours, I was really proud of the result.
                </Typography>
                <Typography className={classes.article}>
                  The lenght of the video was reduced by 20% from the precedent
                  one to make it more dynamic. It needed to be in 5 parts which
                  are :
                  <ul>
                    <li>Teasing</li>
                    <li>Meet the team</li>
                    <li>Anouncement of the location</li>
                    <li>Day-activities</li>
                    <li>Night-activities</li>
                  </ul>
                </Typography>
                <iframe
                  title="SKZ 2019 Trailer"
                  maxWidth="500px"
                  width="100%"
                  height="340px"
                  src="https://www.youtube.com/embed/cDr8XHTkZVI"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowfullscreen
                ></iframe>
                <Typography className={classes.articleTitle}>
                  #04 - MERCHANDISING
                </Typography>
                <Typography className={classes.article}>
                  Each participant receives a bag full of personalised objects
                  such as:
                  <ul>
                    <li>Sweatshirt</li>
                    <li>Card deck</li>
                    <li>Patch</li>
                    <li>Cup</li>
                    <li>External battery</li>
                  </ul>
                </Typography>
                <Typography className={classes.article}>
                  My job was two sided. Indeed, on one side I negociated the
                  contract with the provider to get what we wanted into the
                  fixed budget of €30k and to design the visuals for each one.
                </Typography>
                <Typography className={classes.article}>
                  Here is an exemple of what the patch looked like:
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/WuSq5j3H-_gsJVMB1OPyRTo4KxEVzVnS1nu6lNBGvr37KmFhsP7p6IhYlqZU9gC4UZP6VUMW3VVq3iiC6e9EMaUFP9cjbgQWI1NT3DBp06QTAPH0R3f7TLKgSxhzbfffjKIKx_IVzAl6djXaObThUCcqC9xOzx82OHFxT3_GFESqckUYGIPpRfthqEpkfK1lnwEZTUcW81eKb4_hXhBtz8ScLriCuuKMbBzWuNFEEgBLll6M99FYPlqc9AlyHFxp_cYUqtvqAdycY04Uu8Pn__NMum92ZcC19pli9Ib0TncUnNSjooH_VVHcrMYDIomDrAbU0iP9-jGzFL8v5HsdhOXbkhW3Gt_LH17-vUBDnkyloJ2asfuo944_o5mzEiDgxsBHuE7YKYdtryBW-gGs404OUfAzlqG78ukCIVKfK2NvL-KrTJ1q4XdqANeZXj9EU0rgshtyJNr-jJrKgU9XgoySfxiUJLiGlzfUqvRPV61A-HWXbVIga68TVXrtDVpQmcUqa62mrKSaVJKoRhI8qpK-zZaulFYxVjbCLmM98jhTZhbtIElXaIjnIrM5p7x8bnD_lGWovPV72fok2u2RXkr8O7aB0TvPJ8xI_YLJrqbC6A4VMPJ0JX0NBJJxMUlWODcR00N3TkV8SetXIwyyWeRt4y-hebqERT5ZO64uC1ZUFxP7MpNr9Q=s596-no"
                  }
                  alt="Ecusson SKZ"
                  className={classes.imageElement}
                  style={{
                    maxWidth: "300px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <Typography className={classes.articleTitle}>
                  #05 - VISUALS
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/VQI2inBAFqyKi-hI10lmynSvH8l9QvSDhLJqxl8qidwn9GOX8u8VEV-mDUqfpYLG_88abdPJ0iYB1rEMtYHcZokmKK8p8pTmcRnCdTZ5dboklhzmUlYbdA9VtY7knl3pRRC3zxBGWNQbulLFmA1HANkc0cywkGLuUmzHOkyTZz0-GL-Aky4vXGGYC8wdTd00f5cc8h3G7hE6DL1KfrARxFI4j3vhBg2YE6QY7rBFfy4x-9irI9Yg4Z1A5bQiXpkQr8qwu91NcOF7KFz6JfbXESyrkaXhrNYBrphsviuH06izxzlK68Tkmh759aUQKQry3hPf10Sdxr1jxffA02fS8oqNqXI-dndm56WHuISrhKGtmCN3g8pjpaPT6cIAwDu8HNcX1ZtWpGRLjNHrY5abH8Is1AvLJvG05aDoBIn1hu7KjlkqpB4Z7oMFfbxdcEFbLdOacsWd041OB0IEOYX0PT-t6Rdw_zFmldIAvNXiMOzcR_4EXqEyBguludAnJY9DeDRvP_nOmD1F2JlnFEKfQt6hzMJxT6zmInGiXEetQ4l9HfP3SdNh-B-AsXV-rbGNARtPiq1oHxGAfjjy34SXCZQF40ZP8PaNsgJtCK6bqT6OOQM-5ZgwJNkBWFWDZBd6bkTjJn2bIZGtfajERRyFzTP69XwrOV0bw-7M2H11IuS2ddweZRjwwFdyMFn8SPJrRo625tXZxia7-2g_YNmpq9_N1et2sspzLd9na-nQqnCtR2g=w491-h666-no"
                  }
                  alt="Mask Logo"
                  className={classes.imageElement}
                  style={{
                    maxWidth: "300px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/mN0pRbEJclO9wHR9OcBTniyva5eyEpn4-lCR65bVHyxTL8EID8O7A277oksEWM8HO0UfQOzS5m7GgW_qL6jfyWN6mq9hI98AvJp_3-H_P_7csj1vBQJYXyvSvta3Fqt67jDrJmFb69M3r0i0sRj2WQU7csuvQ0bBtPOITUsXVooGwzhLOXcPJKGIOG6_0UXu2T7wioLxK9cGINZNy9s9GgexRCrMPDbyTPV7DXDewILXZ7IkYcSAK2_VTttD26vTDkIVQws8xqmeKuY5Iu-QtNLETMZ4vCmOxp2R3zF7gHDUzprI-S93H9mwytcahz8mcVx2ts4WijSsKf0IDzNVV04gQZylCyMvr3Z1N3G4NkVae5dw-lqR0wTMsm4ZezjIzBgswCGkmix0njvSOpxuRnsU0IVfDhG_guE_a9arLIejtW6la6jZGJXRVRMVK_qx86rIEbIUgUPY7pIeLzYilII3uXgDoxiJ3PpjxG1Y3vx8BY5NzkNQiTX5QahL9gxUZgRsJIAOO0aPLkA_BueK0veFZ41BzDZ-aKvjvtPKKlkf-UiK1QmVWg6uMNOa_2csz7Oi4UER-Ap5r4ZkQts-CvwTkdx_KNt1DVp5u8uahtw4Ifbcf-s9KInu31FTsE97bZSw-yipMHpIKVYV4RdIrDvRtk4coiIKLw_WdjWUC6BVC2AkgiHnRXrqsuODDguRDoDWHpQOhiK9oGIST5EkRRQO2UPEmiWvRZUTHizFj8CbMiw=w920-h518-no"
                  }
                  alt="TBK Tour visual"
                  className={classes.imageElement}
                  style={{
                    maxWidth: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/q2blZ9jhOhp-6-L2cSRjhG_KEfPVxpQljQfUnjRxMLwOjz1HdVInRLVLl62iEMz9DG48D9vckDV_SGXa0NHXVZSWccmubeEpMHkHZR9_5QZI-ZvsZaICYHMcBoBhTtWCyJQkaQx-Ni0_2IW-YG1UsbOzuCVhRL26GB1azoQtwJN3Q7xyVHCDhRAiA8kJ52Bu6c0K0HCf8SQBZjm-nxVffZr_WJDp08u5AUAvOAjlvwPG-mm80cwxDmBJY-7MHuJ1lLqy3dPTHcZZ09CObEe3QsNQv7VpJbtwEwNPrC-vltaPX5I9fZRw51ZF12KM77pMNthNLFAwsAK0XaxhjXeDUr-rvdhWBp0WOLCSh68EFyZIMM3n-eZRW4q8b7NIpL-uaI21cQ31B4xeEWi_ojeocqsDeb-tX8SeG2GcSmTPkFWe6m4oQhSaGUDXXAtQQf_4bTRTgPEide7KCpxJaLi1gUu58Ea5VY1O9M1Bqt41a6nlYry1lRsFSMbyvMW_u17-3nGBUIB-KjyE6Inx6MpuOo7LQWKrDXh_xfCfcaNKB5QLCP2E8RVrvGfxVcNx7aDsuL_NSlRa-FUQ3JjdfGvDrljoZV_ePXgAFhvpV_NmIzhS9VNmEC8Q9lwAteUjJyajqvbeYh43zKiKMmgAwTNWeXSBE7vpvPqDbFJnRMPDjwQoeiZhcT2WTowb20-G3sDMCIud8upR0wghdCNdpEE_TedirWOa2F6SjJsDsSEmtoOBBHI=w920-h518-no"
                  }
                  alt="Price Visual SKZ"
                  className={classes.imageElement}
                  style={{
                    maxWidth: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/O81z-Xt_MZ_PYksQu7oangSLST46RbjbJc9cfjA5YoQGo16oOk88MdrfF_-dc-6Uu4f0KxhfcZcA2U5cGEuzCwnnt11eGSzi1mLCNyH0Z5oWuIwtZnoYyZx6BONYhvQcD7Sxrd7vm4C3irf2weAPFR8Uh_R3rMiiW8ek4wkqnyNHL7Hth9ldXRiZwk4AFHz5ntsyMFdjKNbQeFGwUDDdHmhY5kFLEXzZdiN9HUQmprWiJk6VwamdH3qOWSd9-B1zlyf7xGJ7-xxRe4kZ_z51pIJdnEurIIhBxw6herPFdgWcDYWsJaJdATxp8wXDtOXc0H0U_p2cWeG_0oCIIxNRD4t0-9lq9n65C50qRMIgG2pZHt5N1KiUCaauQP1R66Jyis4-GrLaT-XRVIgO1izTll8gjh5iU0YkoRHqfjnjll9aiOCY3dRz_unSmV8LNqYNCnAIEiiToeeeiPdgRTKAXyD7VspqbiJA8dia4eSaHGjIlwqoxhuTXmWVdyI12Ywb9ZXlJbsOE4Y8VQUm3de1atkauqFgTw7q82-aeZ2emFw9rokOKwxBm8SXVo8cAZYrNjPd8mazKKQKo_qSLvZEZbmSzSkQyylmOI6Gepzwy3yOgwkxQQJMLZ6sVeEziaR7CgdmlT51c9sNEf2cOUpsmUR59ydrwtYQU5pRDxyca9bxVA5QYsimsdylegGZico6pHAvQP2ZiiLdEcjm5prIA7Gam5NKqg7QRhVhPChderXymgQ=w920-h518-no"
                  }
                  alt="Activities of SKZ"
                  className={classes.imageElement}
                  style={{
                    maxWidth: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/ZwUBMm3eYFHgY67U4LvD2usTbkNx_yJKZepumm1ZUpUoFzH-kNeIV9-lFa0ChtXnasgNe0Z6LcUro_u6XMb1eDQjMhpXjvp3gyrIqe4lVBpEhsXtjiKsfNZMcp3Nd4md5VvN4imq399ajAwy8Z9Povgm1fuPHLNTLrFwp4wUUdsS0lcRrHczORBB5ce4UojLFNlQAG-h07K-4mriK4EVL7Y6pigKzhC7bMf3BSQF2bnd6JGn55DHL5JqVy5zY1hJyyt2n-WSdnm-99ceTO3rwqJ2UxtitiOvtuwjimbrA96XZn00EzHqZ0Ensw8JHKnvSvgvRBSaHh59ou-wCEhPX4EOiz7aOPcIyE854RZl8cbwJZpnym21otUEdZoqjWsDt-nvvG6sCVtp-64eTL0j98P0kbdmVApT1hQjP9GIw_vpg3N0Gp3xggxDahFPYLkI4gyHyt53BhQtz6zLYWEtaOVg5e_5XoykhyEEVgxO0bsfcyJrWuXeH2JLmZVCWlG2Bheo3L5K42bUBiHFMH9ZXIeZ0kuTt1iXbF6li4kq5FagFit5LEPTTUJ5hfK2h9VIelQf6MbTl268sh4NTVArEvjpnfOw6w6fkE18C1CamloPipu3UGVDM8g7km5brvPfkSfEkf-MXEiaKH9QTzV6zCxB2CvAlCzertADmODmdkcxiKe4xaq8Xw=s666-no"
                  }
                  alt="Final logo"
                  className={classes.imageElement}
                  style={{
                    maxWidth: "300px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <Typography className={classes.articleEnd}>
                  #THANK YOU FOR READING
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={
                  "https://lh3.googleusercontent.com/d-pbaYswvf9n8gW4KefMiOFe8nHAJ7Vk1HPbbXI_zuzYgtC_VOr9q_1Lh_yMkAVqgwagg0kM5qqRBtfrMnsUOPa9ykpryq7zSib8-1DU-jm4jwNjZ8-SzyJAiQeQLqaq2azQiX4zBZy2aerzn3tYsI_QtSsaobrijIC9d1AVOCOUAGN9d6QSzfmpfHiZ51x777fe7v0R0XktSZiEtvK0dXz6Y3MwzQaC_pRdDD4_LjKMDRsTCYMJtXfp5VxD1pxNxkGp1tIVgo-D19JRwKyWN-TLeOp5K_d4RxqIYnLR36njKKLVGJMEFYlAsxoUOpFrKuKnR_KEdz0U4rZxzz3ZOeBcdWZJ40BaU_BFZFW4Q3B7KHTub80WtYycCb1FSMcP-Vncd3rqMOI33fGhNYKTWgitz2N0LmWG9uUUhbnioW0WTq0OasAcK2UCVJxeZKwUefOgRKGuSn_nr2oW2HO5qMERuNTU0NECz2TZyiVb7p6jX9ziVUfObczK9lojAfS9AFVnKtr1SBSX2pKmZzEmTSfUtadAspaWe1ima-2RfwXfVUCVYrXMoqhwpEZ54NmnF-Sdkwz9BbFzSXM20LpNKP7E6LZERK16nX9Ae5pO1wbEP30WLJen1W4W-2SSQHHNnhF0ybhi4iXIubCKs_D_UfNgSP8mNTgzAmK6C0YdzRo4VlPy82qlEnK0nS7uL1X4xPgQJzU_DSLSC1OxjL3ae22NGC1R7hufs2aZNn2kE6BjfLE=s500-no"
                }
                imageTitle="Leafee Picture"
                date="2018"
                title="Birth of Leafee"
                subTitle="One of 4 Co-founders"
                description="From the Hackathon to the working product and everything in between"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>W</span>
                  hile completing my double degree in Budapest, 3 classmates and
                  I participated in the 2018 edition of the MKB FintechLab
                  Hackathon. Considered as the outsiders (no developper in the
                  team, no existing product nor idea), we still managed to win
                  in the category "Smart-Eco Home, an open banking concept" and
                  occupy a proud second place for the whole event.
                </Typography>
                <Typography className={classes.article}>
                  Here's how we did it.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #01 - THE CHALLENGE
                </Typography>
                <Typography className={classes.article}>
                  "BOŚ Bank from Poland is interested in smart solutions that
                  can reduce people ecological footprint with the help of open
                  banking standard. At the Fintechlab Hackathon taking place
                  from the 30th of November until the 2nd of December 2018,
                  teams will have 30 hours to develop the most effective
                  prototypes which support environmental awareness and
                  effectively reduce the negative impact on environment. The
                  special challenge is that the teams should use the MKB’s tools
                  of open banking and/or smart home products to complete the
                  task."
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/92y8sJhYf0MIwllSjzqKTDEANN_NRpFnru3l0PmX4w1CrIkqtKn2LcOdrkOaeVp-AoVGcEnzZEjZRt1D_n1zbmrXgMgDCqVaQcTDUzbjAEuoSgPOCJk8PjOj9B7YxwmFu7B5No0S4BHWCst1mAy_aKeHz5MQYbU7yvEoRo0jV6Qy2I9sFsbW5rcj-u7-SLIF1aBGdTpfMbvTRP9ZGIB3OHgTmP53OsOeeihYRgaEcNYpPIGMWJZtEXuWRVP1XpgyMl7hNo_JCsbB3_UqrbsD9U6-5-tfUIjt2Yyzptpjk6U27v1oQfiu1DqolfTqWjICU2BbZOMD1m010LE5qCam2isyP6wDSgwS_tKh8wABPNTq__BxfneejLiZyO8Pg0sc9zKWRrvivIa68QYQWZI5FR9eRCEA8_-u9W6VAXpuYVFgfI4AxNiKlRTKx8BmetqECUi7ntCky9JPgtGiw_I72azIOlcVSixdAMNxLTP-c_4dd98GNtBF1kXrTQh0b1GcyhXGx1fhrmnS3odrq5ExuushYKeeuT4tIynOfY_VRoTAx_2gsK7FSIDr4zbrRS20cuUge2hiLxCgW_lF2OGITmkAa6JuHQthD5lnysO2lmAWmkO19BUnfBFwySoSqaL99fEOcX7FyeIxASWd9DAqldm4fF6pJdggXBLDTK82_awe5A3AXHtqJA=w500-h399-no"
                  }
                  alt="Winners of the Hackathon"
                  className={classes.imageElement}
                />
                <Typography className={classes.articleTitle}>
                  #02 - THE IDEA
                </Typography>
                <Typography className={classes.article}>
                  Our assumption was that many people want to be part of the
                  ecological transition but lack an easy and intuitive tool to
                  do so. We believe that such a tool could effectively raise
                  awareness and change the users’ consumption habits. We thought
                  about using the digital transition of banks as a lever, making
                  the best out of open banking, to link management of ﬁnances
                  and ecological impact.
                </Typography>
                <Typography className={classes.article}>
                  From this point on, a PFM-like (Personnal Finance Management)
                  solution came quite naturally. One that would be convenient to
                  use regualarly but filled with the right data to guide the
                  user toward a greener lifestyle.
                </Typography>
                <Typography className={classes.article}>
                  The Minimum Viable Product would have the following features:
                  <ul>
                    <li>All accounts available in one place</li>
                    <li>Budgetting capabilities</li>
                    <li>Privacy & Security</li>
                    <li>Ecological footprint calculated from transactions</li>
                    <li>Guidance toward the reduction of it</li>
                  </ul>
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/bJDcKP9ibQWoqNwjjL_KKXFMKXcfMuO5pmTLjIaVgSlK4z6yMVOQY3iEa6WCmqRZYIM0ibxoksyx045Wql-3Au8WAjLlgpELGqWVo6Q2cw5XcgfMcyoxbVaRrdnqujuURzO7FMg4XHa_--nCOVm99H8m0xn67HZ-phW1wzJwKXwDlvhI1Nc8zZZrER2b-eVJGSGA2jR1yXZHULCDFntn0ChWoBsQgoiaWbjXOXL2n-F9EGy76U-MSUropjI73CYpecAYix6NZm_RY3eyFkRwYWronJ8FY62C1GmA-HxYf-h5QCD38R98nG91KD0JtuaUPw-wAmrFYjJI_4jzl9QvoK_t0EMgmSPgV5jY121PqFlXzWfU7-lP_ThB9p2hmHJG5tOzqp3aZCsXN0owW_PEu1eDaSzeVJo8TDj9dBiiqu2-BDOYsitYaQFlzZvxw02AkpWuyRHeCniKvmT8gRX2f_9AwsnvbHR6BZMylg_V3FEvRv627WOmRP4iWuBAT_bAh_jcMIPNA4mo8FFV8Y5tpd0vRLoeSjVrPpxPDj-eoQrvM_IfrSRvgU-LF6eXFTCo8xfJ6jAb-fPwpgIqlXkeLBePzGfmhIueCazlDbMOrm48FunkETc9F6pdqAdvAWXO3fpq38-ybedZkrkCcKTfa9pdZeBQoGRyDU5ykn0AvjlDppYwPMKweg=w1000-h563-no"
                  }
                  alt="presentation asset"
                  className={classes.imageElement}
                />
                <Typography className={classes.articleTitle}>
                  #03 - THE PRODUCT
                </Typography>
                <Typography className={classes.article}>
                  At the end of the hackathon, we already had a precise idea of
                  what the product would look like, and the jury liked it. We
                  produced the design of the main screens of the app, wrote a
                  business plan, got acquainted with the regulation and did a
                  lot of research on the maths behind the calculations.
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/gXdeQF_O9bdjsPmmFAGEZvVNF_9n3Q8ZQYXXIfq5Ky_uRzWVOwHxikfodA9h0H5h0m7y22RcnmuNWIkF4WKQuq3pTDyZTa_Nb69RGO7J_z7UC4wKPRdzawKB0zV1bzIyl66v38zFT0Rgf4wNUNGlUhBrtTASr0s_zxpoLfU8WWk4lGeWIcpgOAWhnx-adA5rSdZi7AywbOLm8k4o3r5l_c1GTmnm9FTVvXRXc6UNa16x_iZyQv5szpXDn9AUzpjDiaJgorl7kJ4ZCEdKkQ-HZfTogUq9kYKMa2RQLOcmyT4wGoWBpDw-pz8eLyMNbthGWfaWzP1tn5SLMRpo2if7_-Rsj4W3YRJcRuZPmlvVrAABrmEsgB6nfuRKRqh1Tyi8JbPEOiyBm3YLxIJuXRgv_J9h2Iubrs8Cx8qZQwM9UeuJq34i7Y6Doc1qlP2_6m76biUmGyLJ2qh5gLISzumw1Q7gWBmPdaUdBWalV5CXR3L8nq0FtIHcqFMteDLEJYKlWjdUBXhWAVYjqzoapLyNtRdIIlOw46wQvQhdTBzzYACloRaVP_xYJ-H-8FTnsWB8hfKFGa-jsbelyTOMJJ-2V1kIObmxIy-fZhi8FLnxZK9VI4J7CjAeZbev-KYgrcDZEPhhXjLkKRAv9V5bmTsin0xvWxLKjxcOLUGCTdunr2wpZD1gf7Kv3Q=w495-h666-no"
                  }
                  alt="presentation of the app"
                  className={classes.imageElement}
                />
                <Typography className={classes.articleTitle}>
                  #04 - WHAT AFTER ?
                </Typography>
                <Typography className={classes.article}>
                  We could not just leave it there so we kept working on the
                  idea to see where this would go. Our goal was mainly to learn
                  as much as we could about the process of creating a business
                  and actually run one. More personnaly, I saw an opportunity to
                  learn to code and seized it.
                </Typography>
                <Typography className={classes.article}>
                  We had our MVP about 3 months after and kept making iterations
                  on its design and functionnalities. You can visit the website{" "}
                  <a
                    href="http://www.leafeeapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#001aff" }}
                  >
                    here
                  </a>
                  .
                </Typography>
                <Typography className={classes.article}>
                  ※ Due to a lack of time, the project is currently on hold. ※
                </Typography>
                <Typography className={classes.articleEnd}>
                  #THANK YOU FOR READING
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={
                  "https://lh3.googleusercontent.com/zFM2AFoXkKB2Rmq5fyICUfAT4qYNNxFh0PH3LWVVXjv9MhsXjPAzTfJRUhRkXVpls8LQYuaEDcRzcTqIb4CC-oCMyAJo-j3n0JgrVXlbCPZYxvh_1OqqWPoMyWuYOPyc71nyaLb7vz6r4XxZjpXHPtHpjIla8TWMaP2PCVngB2KfsoRxoalH5lr7IByWTrRMwDZnfmTKx11NHOZoabdOFAGIjLo8itGVPFPDrOoCdb3YKlJw9QBmApD-QVnK8JqOyIQtIjR4c5-6qZAqhWHJvMppMRmWNuvhS4GiaxIeWhkSpIzYq--7obn3MYVPBlx-iitwtD2NAfLZKf8tBFJjzW2D0pft9kbnUY-MfkcATLLSaWbDuE8Tu67cML0KRZZVe9ymx2dNDTTz3zlbuYiwGDhXQ8t8aQ1c4uLdnh3sZQzKpctKOOQXUuh9tU2VNBcRhNQhcNEh_bw-UeABovla9gY43vmOJr4CJLH3QHwUqnqSxpKNm2WE_9Ce-aPoLwUb7e2PNfWCOw_Bvimvvyv8JCZQnNDG-V0_OgDzoYB9cJeH-9FNK6UwacJUOWwG9lBriPhU1TnTgtwcl1nQtiIMcekrjwahEEA4GDJ5yrvmLoAIoBm3H7HPq4sz3IjR2mUG0BGbmlhOYNrAplJi2vRRU--7l0v04Lla6KT_YpuJn4RQpbxZqYgbo1WltLxCYaE6f5Ul6HBO1WyTTLzeDdQwU4FsxA5QhGu0Led4ZCiRy7NHtTw=w920-h506-no"
                }
                imageTitle="UAI Team"
                date="2018"
                title="UAI"
                subTitle="team member"
                description="Annual school sport competition gathering 1000 students"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>E</span>
                  ach year, all of the students from Arts & Métiers can gather
                  to a 3 days long sports competition. In 2018, it took place
                  from the 10th of may to the 13th. This edition attracted more
                  than 1000 competitors.
                </Typography>
                <Typography className={classes.article}>
                  Important figures:
                  <ul>
                    <li>Budget of €250k</li>
                    <li>Organizing team of 20 people</li>
                    <li>50 weeks of planning</li>
                    <li>More than 20 sports</li>
                  </ul>
                </Typography>
                <Typography className={classes.article}>
                  I was in charge of the communication and the graphic designer
                  for this event. I learned how to create a communication plan
                  and design guidelines. This event taught me a lot in terms of
                  event organization, project management and dealing with
                  unexpected issues. My most relevant work will be presented
                  below.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #01 - THE LOGO
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/CiWD7RjE2gftI4Zw3t-kn3km5oqbJOJkE8W8cpWNCgnSo1pqeB5FJhiVi6aAL3GMgF3LQk_YNFX_s16FZfen7zN_seDm5OnBKVQp1ab70ZyK7ZD8zIR9N4BwmNbLHYJfQXEF34-_ARePB3_XcJVjHZ34hlwXgW8Y7tgLdZKaH9OKtTIJ1FINJKCBFXGUEoMGXOvtUBW1XWx0N1lxEecTqQp-fq1vYBuQO4FW2ncznZYzEPT8W3bI_Yi_5hwRqdOPp5TDi5k6Sl5_oa7bh4c4VU5sGD8EtseR2DoLN4JfVgO-QkDgja-2JAYUKmTjRp7GOY9SJlN6swnglYUYgkGEasDT5_BOUBIOZwJGHcEWitIPYVYqfcaaY2LPXOmyAWs207lJl233ShPrP4fq5nlp4D91OpdynEk3W7PviYaqljH1D_Dcz6aWIIh06Yw3eQ7Ir0HZ4Ggqlg8sqyn3CY3JrKuCrNuc963uTrnhrNtxJhXrVrbZjokCHZvWzBX1UdNqKTabZ6AzMqCQEYETllswnNCdTDxHdRri76FLB-i-pbFy8DwI-FaXy1p7nLyHV3mUGfLRNEUhpRnpMxLZSpmKyCDTwzaS4-IL7LfQzx0WLEIAbj34jCkjZ2UquogjzfSOO_hk9zZ-9G24vzmONsE2CZGIx7JBg8jaDRDXrfCAv9YLpStFD223Zg=w920-h518-no"
                  }
                  alt="Logo with background"
                  className={classes.imageElement}
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                />
                <Typography className={classes.article}>
                  For this edition, I wanted to give a prestigious look to the
                  logo. Hence the Cinzel font was used. To bring the sport
                  attribute to the logo, I chose to use the same palette as the
                  olympics ans additionally, to bring the flame symbol into the
                  mix. I was quite satisfied with the result but if I had to do
                  it again, I would not opt for a thin font as it brought
                  problems later.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #02 - COLORS
                </Typography>
                <Typography className={classes.article}>
                  As stated above, the colrs were extracted from the traditional
                  olympics colors.
                </Typography>
                <Typography className={classes.article}>
                  <Circle style={{ color: "#f4c300" }} /> #f4c300
                  <br />
                  <Circle style={{ color: "#0da447" }} /> #0da447
                  <br />
                  <Circle style={{ color: "#df0024" }} /> #df0024
                  <br />
                  <Circle style={{ color: "#0085c7" }} /> #0085c7
                  <br />
                  <Circle style={{ color: "#666666" }} /> #666666
                </Typography>
                <Typography className={classes.articleTitle}>
                  #03 - ONLINE COMMUNICATION
                </Typography>
                <Typography className={classes.article}>
                  The online communication was the crucial part of our
                  communication plan as it was driving the sales rate of the
                  tickets. As I was the graphic designer at the same time, it
                  was easier to create a coherent look for the event. "Did you
                  know ?" was our most succesful campaign as we shared fun facts
                  about each campus, raising the engagement level as well as the
                  competitiveness between campuses. It also served as an
                  important canal to share practical information.
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/N4xNB1irOaTbCWfsNI_aFZn2An_lRCACf6hkls4-Vb5xBuFewtxEAF7pYNDzsYxR4mmHDaGq6S4Fn365zFCtUrXCnPR5IGwNoOQKT_NGR_1a6fYfnPZu_mDm1uo0MTNIjPvou6yI7l7BS7fddTln_lcH2Covz2eR--ARCGDyzgwK9QnFWAEv390GSatq2EVKJHuva-QwHP21KY4NQeLL1C-c9QzqlHdhrsdhtfV2sreC5NCRvTaM5OcBvzEMc6zC2LFIrjBlX4s2xTtXsjT-Fq4A3BuY4ROJ1_3ohuCeuTOTVpiyjbjl3KvFZeB0MoXKdCQvAfJouXRtQvfJgcEvvPa7AsyN24bdHI5I9iPGOdpGEpGw6qtG7FXIr-_5mZVPqnIgbYXEMqJMzE8cINosNagCzZYKd_tsp7Gj5gt4kCKLoNxsQXuTnqbALltSZLMZuQE7On-c8yVSDmzKnFX1r0C0gpB5jKUPMyRYCihMfR-8cpBub4hkKiBjfzoMSewq3saVFyx7y2sOi0vcp205E0ISPMzyJBY2j1hbRGXTGo6iTuiaUIdZZnbpbqdo5Yr8M5hZzbUtAFsbW0NhmsLzkTdsS0lZ3GRdxdp7NmUwdXAnmjFBbIQf8y4qIdOWV57a0_xa6QiFweJhPYmQODv8wI_FMxeHYRoNw2o9XixqCnw6Q7bE3oK9lnS-RzTlpb8QpfPRhLq8IUlJ4WJFVEhqBd7JZnjbWJ464YOViO51ZnpWdys=w800-h630-no"
                  }
                  alt="Poster of the even "
                  className={classes.imageElement}
                  style={{
                    marginTop: "30px",
                    marginBottom: "30px",
                    maxWidth: "400px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/2Unt-O0A3ktQXHM4kQ3mq12-5WTSeFSXla_M9uWwFi3aPbMGjU93oUqdf_s3EubqQ3iLA27sprAbr-xz-4uDhM8TPKtyitPeuAPqv8WBVDu3e25fB60cfolARfzb5AfpxBWuvhqyzPPxj1NwMvbmzsr6KyVxlb7lO4Bb7pM9ApwJSR9arxgChKSjU-mNr8opSufsFxPyt6JZzuylXAFvPco47-WuGrjt0X2cFwchVCFAqNu8sUWzeW5_TmdkNZiQTJVUzvCaPqfmBPk_CglYnM-zr_jO5EXYCNcmu0mrE65nk4eWXXo_9CgodoDllf0cEq1UJEZIiAmrBLLFEAeCJwiIuKkhJYQ08AdZu3EGTTM-ZmzSA2b0HODBbhrCtUom6UIQOC-UIe5La9cl63OEvTr8hA0vffiqO7gxwMsJA2nZ1KjvXY7fXwUnMxlG_HUVbxKVurv9AIm85RCcSZyD23mHhmcT1oSL5bnfqalLKOZfcidpNwPCNiJDlnIUhgEzXOfxmzdo2sztb527t_YsMXZST9Jm-Oy2_wJvDMPo0SlMWl94N7cZdqaZkdPKb76x3hncKioxRqVHnEwDFoIGFmWl9p9GMg126sPDm7m47EQV_mYGs76NrMs09P9ZrjKC_saWWun4GpcTJnYsFaAta3sAdH4EMzjc6ckp8kI6kXjAw8eHgCasVWUiRgCNVT_Kjhn9AFweWLerTpmCY2hGbUn1o26dPj0495AmGmXP4pdFtLo=s666-no"
                  }
                  alt="Booklet for participants"
                  className={classes.imageElement}
                  style={{
                    marginTop: "30px",
                    marginBottom: "30px",
                    maxWidth: "400px"
                  }}
                />
                <Typography className={classes.articleTitle}>
                  #04 - PRINTED COMMUNICATION
                </Typography>
                <Typography className={classes.article}>
                  Once on site, we printed visuals to stay in the atmosphere of
                  the event. The participants were also given a booklet
                  containing all of the practical information they might need.
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/Cyf0UaDYHPag3dyPJETbv1uzcuQb8o6grqXz2fVmZ7nzKjE8A-CaeCUqEeODKfluvBUZjLwIozEtRlzj93KTuPxHLE5O8x5VqSyqk_LWNsJDZ5BUlenYS-bT5bXvRhkUFLn2y0y-7ClyOApQpV94mR4kOjbZ8Qa76gKMW_2FvlEPE6VVB3PqX-dcYTCp0vki5lme4ikzxjKa7Rsq2Xx18RGHX1W6MTpzlyPs9yroe3TG3mr704kNfBTXnaMvKYjphlBaSar9_KgCgdyZiqiZMrPB20VBmAQc77CXdY6aXJA-QmD7p2xjJgv99QAFMdGXfIveBQZR45lqXaDf-cXwaTk6lZQpVFDhDwq3TylGzIceM5MOcZfVfQ6JhrZ3bY1WrE2LpczEqhSR8s62ClAbghjTKLo28UyZHX-4fU6V91pcxAF6WGTRtVpBzL5x5wL0lJB0A2ahw4bfCeQqyoNZWTfMFq62pniSyRkZCyUMTAQdP9asVPogIE9ede3tG_hJlTvmA1-8tL9bwc47Bfnmqa8K3qYYkSJ2qbMlLpGlV3bi9wcv3fayYLbzyocz3DfvaFTWHS5FGCph9NOTSuVZE87Pbwr9CM-MBmLtbE9ZjFeZEZGVDQymZpQ9SteqpkuBWCXBxXWdlbohweS9NMbLC5_6y5m8FPUygAT2LwWuXv_slw1PHqwlbWCgx4xrXaKlyYoL89w-bflyzqJCOFTpogTRhfoFcsjGt8WalCuT_4Wt_jk=w467-h666-no"
                  }
                  alt="Poster of the even "
                  className={classes.imageElement}
                  style={{
                    marginTop: "30px",
                    marginBottom: "30px",
                    maxWidth: "300px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/9WeNJAD6NSaU-V-NvNUfi9yWYMGFSgEkIliVTc1M56-7n8aQNBiBdn_p29gFDMvRgVAPUZf6RPr8H90VAPUxPFq-Mg12uj9FwPbrWhTU3U2DIxh9YS7c3YuFmnThFZutMDzAlhM7T4iXq5C7IhTFu0yBROU5bKEsUMG0RsiPE2yYNYBp5jGbS2gPDi_xI0CZTYbM99dx2mHtqjQ4FCD2vgp7-v9RGs7H6L8i1qJjrxNAnM6sDmnVbiBuQG8omBqleZK1sKqLcxFY_ypkd_qjBvefGFnxXv4sMzbWrXCrgSW8IsWbjEy-4zzf9LAWz2GQEYECwFDawkvOzqJyLwsO_eIVDXmUgNE70rPlD-9EE9N1kNJWl5uy9hW9GP5oz30csVrpoN69oRq_mQl-H3Sdh9loC4ekuwpOowIZPzrhmdoCpE3U_UvLemaK0TP3DpowVuhvxl4BlcDWD0mk99JFWYCpduqjXhovhN5I0dWaq2PRSv4y2Mmm_cZYHOAPVYXUeREKImqKTyIU4QshmH3y48m37Jb3tW54S0sZRZEPCqzx1IWe_1RpLZqS0ceDl56mZcoZKACxVueYV2PPnA7ZZDKIs0HuTk-wyS2ro6inNC1ysp0NO77lFxf8UDeuR4D1tzENb8XtzDcWf8iWSMLOzVyqCVBpxUH52kENwFI4FhtIR0jQqB-4gOHTz8Pj2jtWbIed4IWFVM5869_ZBS7dhiLAZ_q1A0Fmshe3AVzRFCUn2_M=w942-h666-no"
                  }
                  alt="Booklet for participants"
                  className={classes.imageElement}
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                />
                <Typography className={classes.articleTitle}>
                  #04 - MERCHANDISING
                </Typography>
                <Typography className={classes.article}>
                  Each participant receives a bag full of personalised objects
                  such as:
                  <ul>
                    <li>T-Shirt</li>
                    <li>Totebag</li>
                    <li>Cup</li>
                    <li>Bracelet</li>
                  </ul>
                </Typography>
                <Typography className={classes.article}>
                  Here is an exemple of what the T-shirt logos looked like for
                  each campus:
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/JULZAIvJZJo1t7n3qg-I-dwu4x340ppUYsTlQyazLHkOCRL47wVerU2-f3mREo6vdMJM99H6iNVheImy_JQye69tG7PHEA-mllKP6UhMXSoizmTREzn3x8NMG1L-0K86ZtFR0VUhdZd1CtwCU1w2r6NKZgdfUgCo4LXWVhwCIy8YqMfl3xjxEB3Ee0mjZsKnI274RhTHZ7XYRj2KKL-uCyCjukEHSRaxcGgbodqJ28xGwwKPem8_h64OZYUDxp3h8AZlAtxyTcm64LKXqQXAXTfxE4ZmHVbMjg28BSEJkvxOihqZGCZE-apM7AvwjUJMWYBzOPN3e8WrOIuCjpmOLEcSNGcE1MZty9EmW1fTqpLqBU_tYQR0QA03nAwRFCOZaXlaalgM5TjXr_YDPD9GduC8aLwjlUG-qQxaxwyYjuXUpP1LobSBDQ2eCRK8SbgkBrskYPhhIfenyfTcrWx2NZf5DhU5VMvEAXTZaFIot8GK01GoWku2Wex50-ZsX6fe2Turr_ZXZYcPdppA0QY8YbuFuE4FijADuJ7GLESAMQpfF3R44q3jMhVCkPjvp4YmGnhfJQm65ww6xuTqdEaIV_rGLUUnYU5le7bu01aDC4pP93iZ0V8GW7dsGPyAhXc2HpP_MxxjiMpZhrBTsyCOa-s0wlt2k-RU0XKLWqIk3jjR8xjAMUQuowPiEFLpQgL2c35d1XX_q9r1zEEz4v-XRP22XEKsNtoV-kBUkSi4y9mnejs=w1280-h640-no"
                  }
                  alt="Tshirt UAI"
                  className={classes.imageElement}
                  style={{
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <Typography className={classes.articleTitle}>
                  #05 - PHOTOS
                </Typography>
                <img
                  src={
                    "https://lh3.googleusercontent.com/ruUiS-d0apcPgC9DcGHSDiUxyCWYrz7hKNpDZf9aWEN4GNRcYM4MHlIYE4D649hYqLo2nejFCHPSRfpTfE6Ne3LyGapT1Wwiy20hfOb3or5gjKw8LEungtkw03bvRZmGfgPK7ghMhPme-n8lGyT8AK1nJtE50_1Vup1UqBuWwB86Xt7PmxGKfb5LuGGcO6etQmjxm2hp_4iuzyAV-tmYPmX8SzCX00RaXVRqdVLinu1aI0nyyCKFTYlBTsWsoA0KpjRCpL8nOVitPbeOvwpbwbxd-CA5Mw3d7OCz4ZeoTeHE6mY40MoXz2EC-h-oyN1arQz9Cc2G89WHH_G2lerFPKZGMCpTHG5XZb-e-MdWvy___3JAPrleQserICWDpkn8XZKSx1Q5GX8dMnEjYJ-yAoj6Fbih-ODFXEoNX8cpG7Jwq6tMmj3fAyrBiM99UmoQ-tZ9VzA41UeAkrlLW-UUXxxEBiEQP6G5HJ_P-D3ve4glqg0JVBnzkMdccy2zfKkg_1BLMJDzCeIC_w0cjZhGloYtGYQBriKsiPL5nxbAynvDfJFjULw3oA2myzIOF5RlTCmD0txrEdDnJ7vZSbmyYBNW2Ju6o7oYG-z6B8ZE9mDas1nRuucci-jyIS-kjeQaSYnhunwrgqFt10qxyjdMqHksNi9RBcoVQqt1rA2G9FoLFna8z1aoaw=s666-no"
                  }
                  alt="President of the vent"
                  className={classes.imageElement}
                  style={{
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/UGyTSLUmwSru6YaPtZfcyCHQEG8kZ9VtSpqJ7jsHgW3DuSnzCEXpDXqouuZMhZ8aG76CX7YFN8kee_wqqwZO2geYLMF15BFRGmPcmXzcn9L4nrxXeIbpZl3chYeXAYDiLMrhuBhVQnlT1xp0fo6U1xyXAT5sDnDjazg-QtIFtbgLfbykLLxlPduUXCVjZ9D9r-bvJm-Sj4yDrIt-HpvKdzMJMbXCR4PstTmBYv0_ziEHKXDGNpMfdhUealsUWrxDfsgW7dFct_clVEZ3TNYJcp-lSOsbiE5YRcVGvfXP2CZSuAJOm2brLImrx9aDv4aZGXWpVEXJFQeUOAWg9kF6dXft9lsKe88pE7uV5SiP3rVSk-Bo1nofnxAwXSU75psbM8eQuHUT8endbOmmLGsvTjJ5TB3HisKQBh1lntmuvM4Pyc9n_qOUwq6xlnRvlKrkFvefdRrsqQmlN8Gi9AUVGtfj8O4YE4RKWA1suBQUVUKu2Zfe_3YhA_0pU8DqtHXprFxAtkj6UjAiRJO1tEMS3LBnx8N8tVv1E2ENT8C2SjsTLy5wAbtZxE38fvl1wA1eL8SrPa-JY-8KQi8GV4KOD6H2Xx-uYB_yE7op66KbpKp6jlBBmgWHfeixON4UB3B_SajGF_gTyZNib-cOhbqn7MG2g7zAERTNpuCdtwSapF_NyklsuYMXOAlzdIgtgXcVBYPb8K8Wd-tr6I7FDG8Z0yRsRplbigXNQMLUloax8Kk6Kfw=w999-h666-no"
                  }
                  alt="campus of Aix en Provence celebrating"
                  className={classes.imageElement}
                  style={{
                    maxWidth: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/Rz2Eo3JDnt2T5oGWVAHlw8EKooFu6wKOkMJRSryF9EaylXpnrZKWl9UCi3aoCNcrQjPte-IgMJLYsn0PFcSL9XkkyFOdK6EWSfpUb83bcgZVv6BwhseP02tZt-JrKzHer4HA6uRD5QMci1LQuzAY-MnISQB7mS_gTgQEecfqZ9ZqAasdkecSnlgMW38fGEJcpCUd9TfUgQcLRRNUNc3MzA1h3vkwkQMacyurPRrEYFxv4IkhxX1c6QHQgMdTP_VIUWcF7At-PeHu1GU_RRJtvjeE-cOx_Bf_JW79tDkbEs3PzOvCiGQgHlWhuTKubRxNkNrp6TdJ_vZzaYybQi63l8qUbNOqmGcJJDi5WZczUcECQXjbmbQcn9Nkg0KsBTLja_Z09QcwB47Nbrgj0ZXvc77UmXDH42pqDkWY_1V9QlaVt2NlBKZaPRw0nL4uY3P0A7d2dBOKAo7KOsaDapKniKyeco2bmDu1UIkfYCzfnBSzWKwfFZ7pZZrbY_MXKCETSjOdsoPzZRzI74tUroeoNqA3-Z-o8I9vfibbBYRKjTPfYjbvBl_DVkvW4oBq383tJOrjlkVzwopMeCrVrThbpPwxZg3S3nwqhf3Bpw6gTsVa3IEdEqoULI5IdxwJCjI5Tk7yAy1kRWEAfVkC1_O2DFkZkEzBokxepplNMdyHSwPz_tyjuu_r_NBFi-oeUgCGQUwpPhrCgxdoiYTtnBljDFYBtGlnSOX9DNYEQbJUqj4eZz8=w1000-h664-no"
                  }
                  alt="campus of Metz celebrating"
                  className={classes.imageElement}
                  style={{
                    maxWidth: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/7-4b9JV5l5-sN7lpcy-0q0uYBQWdzjDKPI_vaxMd-jwNs14hsN1bLP4vjmSGEq-tF8rKsd5dTAa7Qc5QEjyhvydMX8Pq4TtkAMx3UxARod31c29c21zfxfv-LgtdDZ6MJNZpfaLnWh75qIf5ZcE0UZlFnVtm1l9GnbW8FhGpU0XdMIkHgPLRJ-z_6KEQ4f-goYzyIbVnnucDLZ4kuW8yfQ614BwHkxOCtx8pLRL6yfR5kyZgg91oRauwZMJt7b_UkHVLYTbP4KQzKDgKVB9_3e0qOGSoCM1e-Q7g9b2Hlw-ZS1LGUXvbzah1LNGNTNHxhb5TQuyUN6rvtA_bD_TbQgzuV1vO4fZOmME1hLm_DrFIVcbW2xZkAV8il74Ci03tGAle8eGHPGJO4qaUwvTnl6L5Y_WYn0YKBc1psMOoxh147kJ45IjJK_uT_OPICkNM1M4IbNrPiheUeQ6mgC0Y00EcwSU8c1aZqMw_iOskTVChzZccXt_axEF7gDwtEuxYZQO47DipFVUQe9TfsVtGUb3xMtbIFYKTy4hAI8L-fHx1uqa3HS319YCHvLkJPCrMipuoNFi2ZofSbtJE8sTSuAdgQ2GDgnlYlwk-Z2DiYPl637WaXZ1eR92IC-hRrvmPcLmVhmsp6qd5dFdyRaaOpYpyssJ7NnEYNly1UT5pjqLTqNSElKcUyTxQpZxfBvWLh0-6e67JjJupPspzBkSScotz1KYPRl0ahdkgtvuE88AGEbo=w999-h666-no"
                  }
                  alt="Band playing"
                  className={classes.imageElement}
                  style={{
                    maxWidth: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={
                    "https://lh3.googleusercontent.com/cQZLfucDV8bhl-nbwVN6nGaWTqwPErPhxgOJZ79PiKLk_JkStYc1T8pGUkxC6pPNvYaNUgE0EqifFpZqDkogXnRKqs6wcIyAgfS3QtkIJY1_G-HAgfSRaDsntA44XiCehZ4I-v79LV_C1x3ssN0ocR85xTU6B6e5NqIeVtfnuE2MRAJdwYNMYEYR1pKlXLS3BL4DmIlVRKv3JPur1963j3ZA_Qk8Jvois8N0cgDxpEUNmZW8i71QtVvZ5orBNu7qWfxmH5JKlIncb8Wi2uTiGznPvUAwJe_8qKqrFBtsqT6HR4evFB858glU2ML74i_rBg7fFho3anTnMDjJsVet2LgO9f2W7QuamsfhilLOz1BBOjd-G6H3TDxFHEqNEt-WKpVVxWeanIE0OWL08Id_te40Jhjp9sPNoLOmPhL7n9uLf41rBDQk_AJkS_b3S0P941BM7USOUasrop2r4QQIIdzV_l6cNRe7ocixepF3fejkHZ9mKKQSI3WDz_w3ysuRQfb4k3cNKH8-f_IMKteQeZpCs-uKKTL4h1J5LEzkL8NTcWMO-v3emqiKy2xW9NzxlU5UTyFw9adeCgBt0wVCemJSvfMtVtQj20l4D5sqx4XyrrRxvrmFUWTC9iZ4smYSjwK9qWi3PzyylC7li70XgfiM3nptq5hlSYXn4DFO3b_wv2XM1Pk5ulxOC8Gb_JGxJwR1z8uwSrs-uFz--X9LuW_mmkH7BVCTDBOEaLQyaDr7xNw=s666-no"
                  }
                  alt="UAI Team"
                  className={classes.imageElement}
                  style={{
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <Typography className={classes.articleEnd}>
                  #THANK YOU FOR READING
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={
                  "https://lh3.googleusercontent.com/pWYC1VR3dEY7zBlbbSxDhcOeYmIr9jbO-OAjjUR4q2XTKP1OETOO3q4ofnVR8gVUBptuZg7AwSqJvvd0RB3T2ZKR6ZCCnaYRV-o62EQOOgSFfkKEC04jbiInBXc69_D0D_SF4qOqwr0znEQsjak0xj3wuqpKhWww9hiNouOuqTORcNtyAj4Q3NCg9DtMpaVbGw-cUiQ5Pu38483Mieq3zIXpuIWAmKfnpawWX2bux3H3eaZEtSm77Da4iv8ZrH54cBvKbQBn6Vtqlmmch4obzlhZ-k8_Y51W8prXwSSOBBSKSRp3PbOWyLyK0VhJvQK3Oz45DBxLCjsVnqk86NpaTxDBMcvp0Gz2yh7qUQhhrCKUfKf0JdkaGgnVtn47xu6pUOgbHAZkzXYWaZ1FiUjZnAYjKsRRWOjILj4U4KaY9_A0wnpQpt2MVyK4dFLGjfsaaoTFDn4J1lIDRR2om2WdPCnHE21MpKtoPjoChDKdqHrPUz84oe8OjdpySvcnFXNaAHe_mlsMK6ORePqt_oHZfgNAVI-CNONrewMcbCZQsR9sDS-pzaX5MiwgIZ6Ls1OUW6_8FDACq0hk38oP8TCxgCJGeEyWVzRTUok8g6-6K3dIwxciZRAX-ZhAfEsM9nGhSfKRQDibnjyA52kzmfLMH1maswNSukZIxRwBeHduQLuivBOwmg47CYCo1h0iT2AEh_SUGPx9l44BEmmuSfsekv0oTnP5Q5-YVVaBHmlFmLwCb-0=w920-h540-no"
                }
                imageTitle="Quadcopter"
                date="2016"
                title="Quadcopter"
                subTitle="Personnal Project"
                description="The math behind an arduino based Flight Controller"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>F</span>
                  lying objects have always fascinated me. Drones have become so
                  popular that I could not stay away from them too long. As I am
                  soon going to be a mechanical engineer, I took on the
                  challenge to understand the mechanic of the flight and to
                  build my own solution for it.
                </Typography>
                <Typography className={classes.article}>
                  This website's purpose is not to educate you, the reader, but
                  rather is a place to showcase my projects. This is why the
                  explanations will be kept to the minimum for the sake of
                  length.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #01 - Modelling
                </Typography>
                <Typography className={classes.article}>
                  Before starting to dog into the math, it is important to make
                  some assumptions as to simplify and define our problem. They
                  are as follows:
                </Typography>
                <Typography className={classes.article}>
                  <ul>
                    <li>The tructure is a rigid body</li>
                    <li>The structure is perfectly symetrical</li>
                    <li>Motors are perfectly identical</li>
                  </ul>
                </Typography>
                <Typography className={classes.article}>
                  We'll start off by writing the movement equation that comes
                  from Newton's laws of motion.
                </Typography>
                <Typography className={classes.article}>
                  <img
                    src="https://latex.codecogs.com/svg.latex?\large&space;m\overrightarrow{a}=\overrightarrow{P}&plus;R\overrightarrow{T_{total}}&plus;\overrightarrow{T_{f}}"
                    title="m\overrightarrow{a}=\overrightarrow{P}+R\overrightarrow{T_{total}}+\overrightarrow{T_{f}}"
                    alt="Equation 2"
                    className={classes.eqElement}
                    style={{
                      marginTop: "30px",
                      marginBottom: "30px"
                    }}
                  />
                </Typography>
                <Typography className={classes.article}>
                  where{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;m"
                    title="m"
                    alt="value explanation 12"
                  />{" "}
                  is the mass,{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{a}"
                    title="\overrightarrow{a}"
                    alt="value explanation 13"
                  />{" "}
                  the acceleration,{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{P}"
                    title="\overrightarrow{P}"
                    alt="value explanation 8"
                  />{" "}
                  the weight,{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;R"
                    title="R"
                    alt="value explanation 9"
                  />{" "}
                  the rotational matrix from the frame of the quadcopter to the
                  inertial frame of reference,{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{T_{total}}"
                    title="\overrightarrow{T_{total}}"
                    alt="value explanation 10"
                  />{" "}
                  the thrust generated by the motors and{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{T_{f}}"
                    title="\small \overrightarrow{T_{f}}"
                    alt="value explanation 11"
                  />{" "}
                  represents the frictional forces.
                </Typography>
                <Typography className={classes.article}>
                  Now that we have the movement equation, let's find the
                  rotational equation. We first need to express the torque in
                  each axis of rotation. We obtain the following equation:
                </Typography>
                <Typography className={classes.article}>
                  <img
                    src="https://latex.codecogs.com/svg.latex?\large&space;\overrightarrow{\tau&space;_{total}}=&space;\begin{bmatrix}&space;\tau_{\psi}\\&space;\tau_{\theta&space;}\\&space;\tau_{\varphi&space;}&space;\end{bmatrix}&space;=\begin{bmatrix}&space;Lk(\omega&space;_{2}^{2}-\omega&space;_{4}^{2})\\&space;Lk(\omega&space;_{1}^{2}-\omega&space;_{3}^{2})\\&space;b((\omega&space;_{1}^{2}-\omega&space;_{2}^{2}&plus;\omega&space;_{3}^{2}-\omega&space;_{4}^{2})))&space;\end{bmatrix}"
                    title="\overrightarrow{\tau _{total}}=\begin{bmatrix} Lk(\omega _{2}^{2}-\omega _{4}^{2})\\ Lk(\omega _{1}^{2}-\omega _{3}^{2})\\ b((\omega _{1}^{2}-\omega _{2}^{2}+\omega _{3}^{2}-\omega _{4}^{2}))) \end{bmatrix}"
                    alt="Equation 1"
                    className={classes.eqElement}
                    style={{
                      marginTop: "30px",
                      marginBottom: "30px"
                    }}
                  />
                </Typography>
                <Typography className={classes.article}>
                  where{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{\tau_{total}}"
                    title="\small \overrightarrow{\tau_{total}}"
                    alt="value explanation 1"
                  />{" "}
                  is the vector of the corresponding torque in each axis of
                  rotation,{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;L"
                    title="\small L"
                    alt="value explanation 2"
                  />{" "}
                  the length from the center of the quadcopter to the center of
                  a propeller,{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;k"
                    title="\small k"
                    alt="value explanation 3"
                  />{" "}
                  a constant that links the motor roational speed to the force
                  it produced (varies with the shape and size of the propeller
                  and the density of the air),{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\omega_{i}"
                    title="\small \omega_{i}"
                    alt="value explanation 4"
                  />{" "}
                  the rotational speed of the motor i and{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;b"
                    title="\small b"
                    alt="value explanation 5"
                  />
                  , a constant that links the the motor roational speed to the
                  torque it generates.
                </Typography>
                <Typography className={classes.article}>
                  Finally, to obtain the variation of the rotational speed of
                  the whole quadcopter, we use the previously calculated torque
                  to obtain this equation:
                </Typography>
                <Typography className={classes.article}>
                  <img
                    src="https://latex.codecogs.com/svg.latex?\large&space;\overrightarrow{\dot{\omega&space;}}=\begin{bmatrix}&space;\dot{\omega&space;_{x}}\\&space;\dot{\omega&space;_{y}}\\&space;\dot{\omega&space;_{z}}&space;\end{bmatrix}&space;=&space;\begin{bmatrix}&space;\tau_{\psi}I_{xx}^{-1}\\&space;\tau_{\theta&space;}I_{yy}^{-1}\\&space;\tau_{\varphi&space;}I_{zz}^{-1}&space;\end{bmatrix}&space;-&space;\begin{bmatrix}&space;\frac{I_{yy}-I_{zz}}{I_{xx}}\omega&space;_{y}\omega&space;_{z}\\&space;\frac{I_{zz}-I_{xx}}{I_{yy}}\omega&space;_{x}\omega&space;_{z}\\&space;\frac{I_{xx}-I_{yy}}{I_{zz}}\omega&space;_{x}\omega&space;_{y}&space;\end{bmatrix}"
                    title="\large \overrightarrow{\dot{\omega }}=\begin{bmatrix} \dot{\omega _{x}}\\ \dot{\omega _{y}}\\ \dot{\omega _{z}} \end{bmatrix} = \begin{bmatrix} \tau_{\psi}I_{xx}^{-1}\\ \tau_{\theta }I_{yy}^{-1}\\ \tau_{\varphi }I_{zz}^{-1} \end{bmatrix} - \begin{bmatrix} \frac{I_{yy}-I_{zz}}{I_{xx}}\omega _{y}\omega _{z}\\ \frac{I_{zz}-I_{xx}}{I_{yy}}\omega _{x}\omega _{z}\\ \frac{I_{xx}-I_{yy}}{I_{zz}}\omega _{x}\omega _{y} \end{bmatrix}"
                    alt="Equation 3"
                    className={classes.eqElement}
                    style={{
                      marginTop: "30px",
                      marginBottom: "30px"
                    }}
                  />
                </Typography>
                <Typography className={classes.article}>
                  where{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\dot{\omega_{i}}"
                    title="\small \dot{\omega_{i}}"
                    alt="value explanation 6"
                  />{" "}
                  is the variation of the rotational speed of the quadcopter and{" "}
                  <img
                    src="https://latex.codecogs.com/svg.latex?\inline&space;\small&space;I_{kk}"
                    title="\small I_{kk}"
                    alt="value explanation 7"
                  />{" "}
                  are the diagonal values from the inertia matrix of our system.
                </Typography>
              </WorkCard>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 02 : Travaux |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            Voici une vitrine de mes projets les plus pertinents. Il y en a des
            personnels et d'autres liés à l'école. Vous pouvez en apprendre plus
            sur eux en cliquant sur le bouton "Plus", j'essaie de donner plus de
            détails sur chacun d'eux et, dans les projets d'équipe, je me
            concentre principalement sur mon apport.
          </Typography>
        </Box>
        <Box className={classes.workCardBox} align="center">
          <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={"https://lh3.googleusercontent.com/xe8tiAiOqmG_zBZPgPGj4DMp5BCZhrr8frnM5VJncuz5IuAxdcREQcmPyYRc9c8AGsCpmvEtesuC3FA5ITVK8M7VR-dnapD1dN7FzR32f_ocfFHrpXKu74Wr_v7AusKKY5R464EtsRpL2pBLVFgDZT6D9QFderw7M_e-TbtUXNfJnSl6p7zk2cQO2KGKZmnBAG8faRJjEGGRKZhjRrDLnOSOxc9swOBYnxgu4Huab-OMi8MNlEbKJ57q2Nh5B35AHDDZfWMrPemIbtHlD9lgbW1HwBuJH0yolQdWNKH3PxgUBo90v1h8XySMhiZ3Xjz0eX-Enc_Dpe71a14YlwY6zJdawFMVpuDPlSWjteBsSQ5XzEgrP11k8psTSG6fnsiWyDcG_sIpE7GhIr1XSFN66J3T-xfNjkRji6jTwk3AZhQ8Pb_mphN8FnTJY0qkj8xRqFjhmoBn4ENlWPTGfaXyEf5IsVCZcgKFG2wyl8gz2EAeGOzIEnz5JFEYI58eZ0Mu-nReu6WLXnFnWDz1G483Vg87Bry1jb7qI3GK-mPnOEiUxWM8sOYvIFF9dLqyTgxmIKreOkAXEsaXJGyr3gVdWIBvKxMV_XsDItwoj5BAFQ5Cor5hV_CebQvL5Uz3LWI__HCd7J9a5Dd5RAQxnUtJblp-ukgSHUwiQvD2OUIA2u4X_xSRXbegsX4_WZWYv1FbVvhot9LQiL-OoqRxXAw4Z-bqPJGpuE-EMOQ_mSmtxdrCNUY=w500-h429-no"}
                imageTitle="Picture of myself"
                date="2019"
                title="Site personnel"
                subTitle="Réalisation de ce site internet"
                description="Du design à son utilité en passant par son contenu"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={"https://lh3.googleusercontent.com/ZCI5LyW-EwozIjEJq2fAXaX9UYyL4jv-T_UScYPnLAdpYpqqArNQvfnQYasxnPLkmAyL5ZIlpeI3OfxeLeGPXyyLa4HgnuDBkdmS5ly8q7GOwd66xyskcx7JTyWP3Ka71b71xKdLYKKi6G_dXiw36LNtetmIbxt-wnggMzeLPF7IkKH-6_gYFyqcP4yfmqbE8iTHP66QZObjMMllQIdfM3hRBm8jLkO--w7yan89p04WVuspHJTx1hHjRvb8bDciBR_mIAXBG-R_0JDM-yg-YqebOt5tnSPrLF7-UqZe0gfMOabUxIp9-8ZFohUKwFku8aeV7EO0iizDmX20NZimBQ9Y1NcG9E6L8jUJCmAGZqcAWOgUFZo0I_8ccNSFb-d7LZ_49k6BtS5F9WqHGx62vXM77_6p3ibsft62bHyervH16eZgocOy2TseGRokD7FBqYoQVng3rk5fU7mefJvJEJwfZfWOY4tdXzkqcbz_HxoxIN6UuVlcxIBrFfnNPxXpC16O29JvYo2cFkEQtM4lYMJRc-OpKPN676E-72dEMuOMJOS1cGvvMjAlqN8U4dsWlmDbYDb_QrJa4a1Iz2VeQdEu3U5TgrnwIr2PuLiSVkq0Y1qRxGmRd8U4P3LWb5u1yziFDS_sWhH-P_NhzdlH7aHmaNfgNo385YWvG1V1zLGDjJ8_1WSzd3eTkStDPC28l2p-Ze7EBhhx5Mv_2a1puBGHRgIOxfM2fKsHZ5aUpBhk-QI=w920-h408-no"}
                imageTitle="SKZ image"
                date="2019"
                title="SKZ"
                subTitle="Séjour au ski annuel des A&M"
                description="En charge des créations graphiques et des goodies"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={"https://lh3.googleusercontent.com/d-pbaYswvf9n8gW4KefMiOFe8nHAJ7Vk1HPbbXI_zuzYgtC_VOr9q_1Lh_yMkAVqgwagg0kM5qqRBtfrMnsUOPa9ykpryq7zSib8-1DU-jm4jwNjZ8-SzyJAiQeQLqaq2azQiX4zBZy2aerzn3tYsI_QtSsaobrijIC9d1AVOCOUAGN9d6QSzfmpfHiZ51x777fe7v0R0XktSZiEtvK0dXz6Y3MwzQaC_pRdDD4_LjKMDRsTCYMJtXfp5VxD1pxNxkGp1tIVgo-D19JRwKyWN-TLeOp5K_d4RxqIYnLR36njKKLVGJMEFYlAsxoUOpFrKuKnR_KEdz0U4rZxzz3ZOeBcdWZJ40BaU_BFZFW4Q3B7KHTub80WtYycCb1FSMcP-Vncd3rqMOI33fGhNYKTWgitz2N0LmWG9uUUhbnioW0WTq0OasAcK2UCVJxeZKwUefOgRKGuSn_nr2oW2HO5qMERuNTU0NECz2TZyiVb7p6jX9ziVUfObczK9lojAfS9AFVnKtr1SBSX2pKmZzEmTSfUtadAspaWe1ima-2RfwXfVUCVYrXMoqhwpEZ54NmnF-Sdkwz9BbFzSXM20LpNKP7E6LZERK16nX9Ae5pO1wbEP30WLJen1W4W-2SSQHHNnhF0ybhi4iXIubCKs_D_UfNgSP8mNTgzAmK6C0YdzRo4VlPy82qlEnK0nS7uL1X4xPgQJzU_DSLSC1OxjL3ae22NGC1R7hufs2aZNn2kE6BjfLE=s500-no"}
                imageTitle="Leafee Picture"
                date="2018"
                title="Création de Leafee"
                subTitle="Le commencement de la startup"
                description="Du Hackathon au produit fonctionnel, le périple"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={"https://lh3.googleusercontent.com/zFM2AFoXkKB2Rmq5fyICUfAT4qYNNxFh0PH3LWVVXjv9MhsXjPAzTfJRUhRkXVpls8LQYuaEDcRzcTqIb4CC-oCMyAJo-j3n0JgrVXlbCPZYxvh_1OqqWPoMyWuYOPyc71nyaLb7vz6r4XxZjpXHPtHpjIla8TWMaP2PCVngB2KfsoRxoalH5lr7IByWTrRMwDZnfmTKx11NHOZoabdOFAGIjLo8itGVPFPDrOoCdb3YKlJw9QBmApD-QVnK8JqOyIQtIjR4c5-6qZAqhWHJvMppMRmWNuvhS4GiaxIeWhkSpIzYq--7obn3MYVPBlx-iitwtD2NAfLZKf8tBFJjzW2D0pft9kbnUY-MfkcATLLSaWbDuE8Tu67cML0KRZZVe9ymx2dNDTTz3zlbuYiwGDhXQ8t8aQ1c4uLdnh3sZQzKpctKOOQXUuh9tU2VNBcRhNQhcNEh_bw-UeABovla9gY43vmOJr4CJLH3QHwUqnqSxpKNm2WE_9Ce-aPoLwUb7e2PNfWCOw_Bvimvvyv8JCZQnNDG-V0_OgDzoYB9cJeH-9FNK6UwacJUOWwG9lBriPhU1TnTgtwcl1nQtiIMcekrjwahEEA4GDJ5yrvmLoAIoBm3H7HPq4sz3IjR2mUG0BGbmlhOYNrAplJi2vRRU--7l0v04Lla6KT_YpuJn4RQpbxZqYgbo1WltLxCYaE6f5Ul6HBO1WyTTLzeDdQwU4FsxA5QhGu0Led4ZCiRy7NHtTw=w920-h506-no"}
                imageTitle="UAI Team"
                date="2018"
                title="UAI"
                subTitle="Compétition sportive annuelle des A&M"
                description="En charge des créations graphiques et de la communication"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={"https://lh3.googleusercontent.com/pWYC1VR3dEY7zBlbbSxDhcOeYmIr9jbO-OAjjUR4q2XTKP1OETOO3q4ofnVR8gVUBptuZg7AwSqJvvd0RB3T2ZKR6ZCCnaYRV-o62EQOOgSFfkKEC04jbiInBXc69_D0D_SF4qOqwr0znEQsjak0xj3wuqpKhWww9hiNouOuqTORcNtyAj4Q3NCg9DtMpaVbGw-cUiQ5Pu38483Mieq3zIXpuIWAmKfnpawWX2bux3H3eaZEtSm77Da4iv8ZrH54cBvKbQBn6Vtqlmmch4obzlhZ-k8_Y51W8prXwSSOBBSKSRp3PbOWyLyK0VhJvQK3Oz45DBxLCjsVnqk86NpaTxDBMcvp0Gz2yh7qUQhhrCKUfKf0JdkaGgnVtn47xu6pUOgbHAZkzXYWaZ1FiUjZnAYjKsRRWOjILj4U4KaY9_A0wnpQpt2MVyK4dFLGjfsaaoTFDn4J1lIDRR2om2WdPCnHE21MpKtoPjoChDKdqHrPUz84oe8OjdpySvcnFXNaAHe_mlsMK6ORePqt_oHZfgNAVI-CNONrewMcbCZQsR9sDS-pzaX5MiwgIZ6Ls1OUW6_8FDACq0hk38oP8TCxgCJGeEyWVzRTUok8g6-6K3dIwxciZRAX-ZhAfEsM9nGhSfKRQDibnjyA52kzmfLMH1maswNSukZIxRwBeHduQLuivBOwmg47CYCo1h0iT2AEh_SUGPx9l44BEmmuSfsekv0oTnP5Q5-YVVaBHmlFmLwCb-0=w920-h540-no"}
                imageTitle="Quadcopter"
                date="2016"
                title="Quadcopter"
                subTitle="Projet personnel"
                description="Les maths derrière un contrôleur de vol basé sur Arduino"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}
