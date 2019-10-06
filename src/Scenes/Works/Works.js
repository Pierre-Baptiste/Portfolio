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
    width: "100%",
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
                image={"https://lh3.googleusercontent.com/xe8tiAiOqmG_zBZPgPGj4DMp5BCZhrr8frnM5VJncuz5IuAxdcREQcmPyYRc9c8AGsCpmvEtesuC3FA5ITVK8M7VR-dnapD1dN7FzR32f_ocfFHrpXKu74Wr_v7AusKKY5R464EtsRpL2pBLVFgDZT6D9QFderw7M_e-TbtUXNfJnSl6p7zk2cQO2KGKZmnBAG8faRJjEGGRKZhjRrDLnOSOxc9swOBYnxgu4Huab-OMi8MNlEbKJ57q2Nh5B35AHDDZfWMrPemIbtHlD9lgbW1HwBuJH0yolQdWNKH3PxgUBo90v1h8XySMhiZ3Xjz0eX-Enc_Dpe71a14YlwY6zJdawFMVpuDPlSWjteBsSQ5XzEgrP11k8psTSG6fnsiWyDcG_sIpE7GhIr1XSFN66J3T-xfNjkRji6jTwk3AZhQ8Pb_mphN8FnTJY0qkj8xRqFjhmoBn4ENlWPTGfaXyEf5IsVCZcgKFG2wyl8gz2EAeGOzIEnz5JFEYI58eZ0Mu-nReu6WLXnFnWDz1G483Vg87Bry1jb7qI3GK-mPnOEiUxWM8sOYvIFF9dLqyTgxmIKreOkAXEsaXJGyr3gVdWIBvKxMV_XsDItwoj5BAFQ5Cor5hV_CebQvL5Uz3LWI__HCd7J9a5Dd5RAQxnUtJblp-ukgSHUwiQvD2OUIA2u4X_xSRXbegsX4_WZWYv1FbVvhot9LQiL-OoqRxXAw4Z-bqPJGpuE-EMOQ_mSmtxdrCNUY=w500-h429-no"}
                imageTitle="Picture of myself"
                date="2019"
                title="Personal Website"
                subTitle="Individual"
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
                  src={"https://lh3.googleusercontent.com/o8PD3sh4JN9RN5Ea3KZc5p_T4jxK1EVhOw_JlNHlg87_4H8JDOjC1NLak9M-ggurQ8-NCoo1HERyrEBWgz4InXaKtpvcR-RGXLk82kS3MAvyW3ylhKbYjLvtNCWPbod87Sivb7ioy16XI9CZ5EiyT6q0uZjJMm_vkiPKVo7ktleS0poZNj4dmCPxd06dlA03lJ1YfUO6aW-ykSOWJe8eY-DfUTh01k12gcCFl0HK6IjfK6nw2vMndTfnOGv_lnCbCef2Soa3nFlfmV_T38jC_qTxhTqBZ0ECTwLF7YQYHhkVliyE04DtVAxPXR41FKg1TTC_0FWtdL2mTOwmNVMWrBsUVDzkOPL0iJSMHJPS_o5CXY8PmF3JLkFOLLzIe_Xm7JCTeOFEOAcX1LwUk_NNKti9_PDGHZ1DpgbzMXhlx2qDPrGjvXDcVgA0-gkeW0q2KD6KZMCvzAH7rKers5BOU3PBO77I-cSyHODvTdQFY-qCRFBtD6CCD0kh8jdULytLLMhPRgLD9mTryeQcaU332-jlDR9Z30iP423w_Fwssj1iXiptgJ09wB-Ip0npyXVVfKfWFIbVCPmX_Z5HHGHeHTpaVdqhrcNrNAYAzZ-Ocblyck0agjHtojWVGUaDmNuIH78UEcYjDEhJWg4DhM_vavJ9IJZYoikq9MTYceHa-L7JblhIl6kC7g=w888-h666-no"}
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
                  src={"https://lh3.googleusercontent.com/1RvZI5ixQMORqWnoBW3uDiBOZvYzn8nrVhFxFJTjU_tFobwzQ8w9EL7xouJX3lnzyKHyBZ-9wQovR1-7R500502OW9CQIu6hI5t4A4rKU21kQ38RS-TzlnX3ULNekxhWhYjZCrQ8I8qBQIBgNk4EyXZGH6FmiRBvmZqBRcrX46SP4br24zrijXD8P7-9-EXGXcz7rPmnTLiwd7VdNusej8i_l767XpRLMGllmzln_Nr9gVneEQbHaaOFkcihLtanXI0fi0KEGKE8Yfh9g6kyb9WSCoJm7mH6eQGIcug-Ur0bVfaOFGzumcjtqGyWi9U5lfsuzRHcYdYfXyZ6V4R6NfaikJ0wboDzKLzqyoID-QizMywuNXGsJwEXnSQTQabdOj6OYHDwmnGOWPUYFjWMzsJSc7EZlFeNFKV3uaRbWDpFYAhHXiCQI4lxIIzRxEO-VmxbJiTEDcW6HkTpAPg7jcnPU8lPvJd_1X_gp578fleLENPqE-lt-LzSfF34NTgl0DAS3b9AvgGo7V7CYX-YF4Cufg1EgDFB6YlpZ5VgBC49mpjm65jgXFDQEKv9VquwYH4ywrhB6poZbnG1zvDDYPekJD7r7DfVg064L8Ek2eokBIquS9ZloM8m-94-P8n9QvYjxbO-XsedjlV1A0lSiTRytamQYef8DaCse6aeNHlTu4uKfgRAZQ=w500-h319-no"}
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
                  src={"https://lh3.googleusercontent.com/4S-HggW-4CpLMgFa2d3dUjowTdtdu4Li4pxWXtGC_Cs-rWqinSaAxg9znyNPRowjUl6ILUvbOZIkUF1XbqfqyMbHJp8lDkQGN81jz5LkG9kBJlJw0L8Ya3uCq6UdJlFy10r8iX5-E7zSIyFGflxdQflwQU04MjhHYIwL7yoYrhAYgk41gT2m41YFmldPGD_zsdz_EIGAUZObFPLQOSDIV_g02UtE-BV4KadD5VbSX-sk5AHWI9ysMg6fPW7xSfiRp4Plh2WkeDhUdsTJIOGgX4qssq0BGKJYx02Y9n6539xB0rmvNd-GoCkv14YP3GTDOCxgsy9_ouR1vRNMQRor7UtXx9cod24VJCP8ZaFUy9UiBYjWB1S9KPKvpYi4CzOHv073rAl2u3SafuCXCJuwp6ibJeoUuEVxshsfJMSniBXzvmjYTqwKgj1bUbF5oaqqU_3i1s25P3RgRjx9GuAvrvP1pU97Ag68kGB0vXrvYmLWj-VidSTZWvhPv5x67iRVRPwshzviwQ_d-7yc7KBxUORtQXQ68i2-WV_S3a5Pbch7VVZEf6RocX9YBz3xX5uYt6UmIa29hORRYfysNCxyMAXoRG4CbRNjBMoOmKAXyLLG5CodWz5m-1VV5dzz9G_HYu09kbALqFG3NNZchYcOlPvCoBKS0egzGuFfgsVw1dAB5ENTQhuX0A=w860-h666-no"}
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
                image={"https://lh3.googleusercontent.com/ZCI5LyW-EwozIjEJq2fAXaX9UYyL4jv-T_UScYPnLAdpYpqqArNQvfnQYasxnPLkmAyL5ZIlpeI3OfxeLeGPXyyLa4HgnuDBkdmS5ly8q7GOwd66xyskcx7JTyWP3Ka71b71xKdLYKKi6G_dXiw36LNtetmIbxt-wnggMzeLPF7IkKH-6_gYFyqcP4yfmqbE8iTHP66QZObjMMllQIdfM3hRBm8jLkO--w7yan89p04WVuspHJTx1hHjRvb8bDciBR_mIAXBG-R_0JDM-yg-YqebOt5tnSPrLF7-UqZe0gfMOabUxIp9-8ZFohUKwFku8aeV7EO0iizDmX20NZimBQ9Y1NcG9E6L8jUJCmAGZqcAWOgUFZo0I_8ccNSFb-d7LZ_49k6BtS5F9WqHGx62vXM77_6p3ibsft62bHyervH16eZgocOy2TseGRokD7FBqYoQVng3rk5fU7mefJvJEJwfZfWOY4tdXzkqcbz_HxoxIN6UuVlcxIBrFfnNPxXpC16O29JvYo2cFkEQtM4lYMJRc-OpKPN676E-72dEMuOMJOS1cGvvMjAlqN8U4dsWlmDbYDb_QrJa4a1Iz2VeQdEu3U5TgrnwIr2PuLiSVkq0Y1qRxGmRd8U4P3LWb5u1yziFDS_sWhH-P_NhzdlH7aHmaNfgNo385YWvG1V1zLGDjJ8_1WSzd3eTkStDPC28l2p-Ze7EBhhx5Mv_2a1puBGHRgIOxfM2fKsHZ5aUpBhk-QI=w920-h408-no"}
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
                  src={"https://lh3.googleusercontent.com/pW_jaf9Adk1gF_Mog9JycNEBKSzRu-wPvRe-_ncu-vQfoxWgr0d5N7dt7tQ-7AvEbsA2depJJ4OoMoFvsStVjTmOt04N-vDazAAEbASO5xHsXcQn6Nda0M4ryGK6a3JFrVCFPq0ZWhjQj62zDDHAMsAPLVg_aVP45ZNQji3Oqd4PUSvi9yAl7KUp93EmrIO2BTtGDcggr7JQRathPjWrdyr8XUZF2loz5MxSK1Sbm8NEIVeH6fk6urSulKR2B-WKcLkjP0PJdoIRUNFJzAStQxMLSrE_KOGtpzudUBLPt8DGc_rAwL8nNSNth_B56_OZMbDExmIW9kKve7XJqhQpVyQS2fEByXq7jfqCKor7OQKbBSTz2lbnYto8seYjici2Uxu6j2y8PThlkRrDRE0S6om4KcvrAGRaD4OowBlA_hBOOyF1ZfyOW_gI2hEBbvRCPWEv16mtZ32vLCjN66NCTRA1bv8wmoHuCRN2wEeEJ4KCU-Z-RJWKPSSXsgfUbeYW2_yiLQP9KeqtBW1EvkeddAK45BLKbbkXm_irapmadt_zNf_IyvfxogXBRnysMv-F23tGDxKger214boFz4-xuGNdkP0lTpIV9gfl_YJQciaHVH196PLvZsSvUUSgxWRwk2mrS6Q28ht_FNqBBzOBogpzxEbDL7Zujms3-a6FIhqgHl4pSbykAEWBBT9f2WKbjoo_FDdKWsMkSdXo-dNraBw2-yxZfKTkc_d5hp04B-UNYLA=w920-h400-no"}
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
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/cDr8XHTkZVI"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
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
                  src={"https://lh3.googleusercontent.com/WuSq5j3H-_gsJVMB1OPyRTo4KxEVzVnS1nu6lNBGvr37KmFhsP7p6IhYlqZU9gC4UZP6VUMW3VVq3iiC6e9EMaUFP9cjbgQWI1NT3DBp06QTAPH0R3f7TLKgSxhzbfffjKIKx_IVzAl6djXaObThUCcqC9xOzx82OHFxT3_GFESqckUYGIPpRfthqEpkfK1lnwEZTUcW81eKb4_hXhBtz8ScLriCuuKMbBzWuNFEEgBLll6M99FYPlqc9AlyHFxp_cYUqtvqAdycY04Uu8Pn__NMum92ZcC19pli9Ib0TncUnNSjooH_VVHcrMYDIomDrAbU0iP9-jGzFL8v5HsdhOXbkhW3Gt_LH17-vUBDnkyloJ2asfuo944_o5mzEiDgxsBHuE7YKYdtryBW-gGs404OUfAzlqG78ukCIVKfK2NvL-KrTJ1q4XdqANeZXj9EU0rgshtyJNr-jJrKgU9XgoySfxiUJLiGlzfUqvRPV61A-HWXbVIga68TVXrtDVpQmcUqa62mrKSaVJKoRhI8qpK-zZaulFYxVjbCLmM98jhTZhbtIElXaIjnIrM5p7x8bnD_lGWovPV72fok2u2RXkr8O7aB0TvPJ8xI_YLJrqbC6A4VMPJ0JX0NBJJxMUlWODcR00N3TkV8SetXIwyyWeRt4y-hebqERT5ZO64uC1ZUFxP7MpNr9Q=s596-no"}
                  alt="Ecusson SKZ"
                  className={classes.imageElement}
                  style={{
                    width: "300px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <Typography className={classes.articleTitle}>
                  #05 - VISUALS
                </Typography>
                <img
                  src={"https://lh3.googleusercontent.com/VQI2inBAFqyKi-hI10lmynSvH8l9QvSDhLJqxl8qidwn9GOX8u8VEV-mDUqfpYLG_88abdPJ0iYB1rEMtYHcZokmKK8p8pTmcRnCdTZ5dboklhzmUlYbdA9VtY7knl3pRRC3zxBGWNQbulLFmA1HANkc0cywkGLuUmzHOkyTZz0-GL-Aky4vXGGYC8wdTd00f5cc8h3G7hE6DL1KfrARxFI4j3vhBg2YE6QY7rBFfy4x-9irI9Yg4Z1A5bQiXpkQr8qwu91NcOF7KFz6JfbXESyrkaXhrNYBrphsviuH06izxzlK68Tkmh759aUQKQry3hPf10Sdxr1jxffA02fS8oqNqXI-dndm56WHuISrhKGtmCN3g8pjpaPT6cIAwDu8HNcX1ZtWpGRLjNHrY5abH8Is1AvLJvG05aDoBIn1hu7KjlkqpB4Z7oMFfbxdcEFbLdOacsWd041OB0IEOYX0PT-t6Rdw_zFmldIAvNXiMOzcR_4EXqEyBguludAnJY9DeDRvP_nOmD1F2JlnFEKfQt6hzMJxT6zmInGiXEetQ4l9HfP3SdNh-B-AsXV-rbGNARtPiq1oHxGAfjjy34SXCZQF40ZP8PaNsgJtCK6bqT6OOQM-5ZgwJNkBWFWDZBd6bkTjJn2bIZGtfajERRyFzTP69XwrOV0bw-7M2H11IuS2ddweZRjwwFdyMFn8SPJrRo625tXZxia7-2g_YNmpq9_N1et2sspzLd9na-nQqnCtR2g=w491-h666-no"}
                  alt="Mask Logo"
                  className={classes.imageElement}
                  style={{
                    width: "300px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={"https://lh3.googleusercontent.com/mN0pRbEJclO9wHR9OcBTniyva5eyEpn4-lCR65bVHyxTL8EID8O7A277oksEWM8HO0UfQOzS5m7GgW_qL6jfyWN6mq9hI98AvJp_3-H_P_7csj1vBQJYXyvSvta3Fqt67jDrJmFb69M3r0i0sRj2WQU7csuvQ0bBtPOITUsXVooGwzhLOXcPJKGIOG6_0UXu2T7wioLxK9cGINZNy9s9GgexRCrMPDbyTPV7DXDewILXZ7IkYcSAK2_VTttD26vTDkIVQws8xqmeKuY5Iu-QtNLETMZ4vCmOxp2R3zF7gHDUzprI-S93H9mwytcahz8mcVx2ts4WijSsKf0IDzNVV04gQZylCyMvr3Z1N3G4NkVae5dw-lqR0wTMsm4ZezjIzBgswCGkmix0njvSOpxuRnsU0IVfDhG_guE_a9arLIejtW6la6jZGJXRVRMVK_qx86rIEbIUgUPY7pIeLzYilII3uXgDoxiJ3PpjxG1Y3vx8BY5NzkNQiTX5QahL9gxUZgRsJIAOO0aPLkA_BueK0veFZ41BzDZ-aKvjvtPKKlkf-UiK1QmVWg6uMNOa_2csz7Oi4UER-Ap5r4ZkQts-CvwTkdx_KNt1DVp5u8uahtw4Ifbcf-s9KInu31FTsE97bZSw-yipMHpIKVYV4RdIrDvRtk4coiIKLw_WdjWUC6BVC2AkgiHnRXrqsuODDguRDoDWHpQOhiK9oGIST5EkRRQO2UPEmiWvRZUTHizFj8CbMiw=w920-h518-no"}
                  alt="TBK Tour visual"
                  className={classes.imageElement}
                  style={{
                    width: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={"https://lh3.googleusercontent.com/q2blZ9jhOhp-6-L2cSRjhG_KEfPVxpQljQfUnjRxMLwOjz1HdVInRLVLl62iEMz9DG48D9vckDV_SGXa0NHXVZSWccmubeEpMHkHZR9_5QZI-ZvsZaICYHMcBoBhTtWCyJQkaQx-Ni0_2IW-YG1UsbOzuCVhRL26GB1azoQtwJN3Q7xyVHCDhRAiA8kJ52Bu6c0K0HCf8SQBZjm-nxVffZr_WJDp08u5AUAvOAjlvwPG-mm80cwxDmBJY-7MHuJ1lLqy3dPTHcZZ09CObEe3QsNQv7VpJbtwEwNPrC-vltaPX5I9fZRw51ZF12KM77pMNthNLFAwsAK0XaxhjXeDUr-rvdhWBp0WOLCSh68EFyZIMM3n-eZRW4q8b7NIpL-uaI21cQ31B4xeEWi_ojeocqsDeb-tX8SeG2GcSmTPkFWe6m4oQhSaGUDXXAtQQf_4bTRTgPEide7KCpxJaLi1gUu58Ea5VY1O9M1Bqt41a6nlYry1lRsFSMbyvMW_u17-3nGBUIB-KjyE6Inx6MpuOo7LQWKrDXh_xfCfcaNKB5QLCP2E8RVrvGfxVcNx7aDsuL_NSlRa-FUQ3JjdfGvDrljoZV_ePXgAFhvpV_NmIzhS9VNmEC8Q9lwAteUjJyajqvbeYh43zKiKMmgAwTNWeXSBE7vpvPqDbFJnRMPDjwQoeiZhcT2WTowb20-G3sDMCIud8upR0wghdCNdpEE_TedirWOa2F6SjJsDsSEmtoOBBHI=w920-h518-no"}
                  alt="Price Visual SKZ"
                  className={classes.imageElement}
                  style={{
                    width: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={"https://lh3.googleusercontent.com/O81z-Xt_MZ_PYksQu7oangSLST46RbjbJc9cfjA5YoQGo16oOk88MdrfF_-dc-6Uu4f0KxhfcZcA2U5cGEuzCwnnt11eGSzi1mLCNyH0Z5oWuIwtZnoYyZx6BONYhvQcD7Sxrd7vm4C3irf2weAPFR8Uh_R3rMiiW8ek4wkqnyNHL7Hth9ldXRiZwk4AFHz5ntsyMFdjKNbQeFGwUDDdHmhY5kFLEXzZdiN9HUQmprWiJk6VwamdH3qOWSd9-B1zlyf7xGJ7-xxRe4kZ_z51pIJdnEurIIhBxw6herPFdgWcDYWsJaJdATxp8wXDtOXc0H0U_p2cWeG_0oCIIxNRD4t0-9lq9n65C50qRMIgG2pZHt5N1KiUCaauQP1R66Jyis4-GrLaT-XRVIgO1izTll8gjh5iU0YkoRHqfjnjll9aiOCY3dRz_unSmV8LNqYNCnAIEiiToeeeiPdgRTKAXyD7VspqbiJA8dia4eSaHGjIlwqoxhuTXmWVdyI12Ywb9ZXlJbsOE4Y8VQUm3de1atkauqFgTw7q82-aeZ2emFw9rokOKwxBm8SXVo8cAZYrNjPd8mazKKQKo_qSLvZEZbmSzSkQyylmOI6Gepzwy3yOgwkxQQJMLZ6sVeEziaR7CgdmlT51c9sNEf2cOUpsmUR59ydrwtYQU5pRDxyca9bxVA5QYsimsdylegGZico6pHAvQP2ZiiLdEcjm5prIA7Gam5NKqg7QRhVhPChderXymgQ=w920-h518-no"}
                  alt="Activities of SKZ"
                  className={classes.imageElement}
                  style={{
                    width: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={"https://lh3.googleusercontent.com/ZwUBMm3eYFHgY67U4LvD2usTbkNx_yJKZepumm1ZUpUoFzH-kNeIV9-lFa0ChtXnasgNe0Z6LcUro_u6XMb1eDQjMhpXjvp3gyrIqe4lVBpEhsXtjiKsfNZMcp3Nd4md5VvN4imq399ajAwy8Z9Povgm1fuPHLNTLrFwp4wUUdsS0lcRrHczORBB5ce4UojLFNlQAG-h07K-4mriK4EVL7Y6pigKzhC7bMf3BSQF2bnd6JGn55DHL5JqVy5zY1hJyyt2n-WSdnm-99ceTO3rwqJ2UxtitiOvtuwjimbrA96XZn00EzHqZ0Ensw8JHKnvSvgvRBSaHh59ou-wCEhPX4EOiz7aOPcIyE854RZl8cbwJZpnym21otUEdZoqjWsDt-nvvG6sCVtp-64eTL0j98P0kbdmVApT1hQjP9GIw_vpg3N0Gp3xggxDahFPYLkI4gyHyt53BhQtz6zLYWEtaOVg5e_5XoykhyEEVgxO0bsfcyJrWuXeH2JLmZVCWlG2Bheo3L5K42bUBiHFMH9ZXIeZ0kuTt1iXbF6li4kq5FagFit5LEPTTUJ5hfK2h9VIelQf6MbTl268sh4NTVArEvjpnfOw6w6fkE18C1CamloPipu3UGVDM8g7km5brvPfkSfEkf-MXEiaKH9QTzV6zCxB2CvAlCzertADmODmdkcxiKe4xaq8Xw=s666-no"}
                  alt="Final logo"
                  className={classes.imageElement}
                  style={{
                    width: "300px",
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
                image={"https://lh3.googleusercontent.com/d-pbaYswvf9n8gW4KefMiOFe8nHAJ7Vk1HPbbXI_zuzYgtC_VOr9q_1Lh_yMkAVqgwagg0kM5qqRBtfrMnsUOPa9ykpryq7zSib8-1DU-jm4jwNjZ8-SzyJAiQeQLqaq2azQiX4zBZy2aerzn3tYsI_QtSsaobrijIC9d1AVOCOUAGN9d6QSzfmpfHiZ51x777fe7v0R0XktSZiEtvK0dXz6Y3MwzQaC_pRdDD4_LjKMDRsTCYMJtXfp5VxD1pxNxkGp1tIVgo-D19JRwKyWN-TLeOp5K_d4RxqIYnLR36njKKLVGJMEFYlAsxoUOpFrKuKnR_KEdz0U4rZxzz3ZOeBcdWZJ40BaU_BFZFW4Q3B7KHTub80WtYycCb1FSMcP-Vncd3rqMOI33fGhNYKTWgitz2N0LmWG9uUUhbnioW0WTq0OasAcK2UCVJxeZKwUefOgRKGuSn_nr2oW2HO5qMERuNTU0NECz2TZyiVb7p6jX9ziVUfObczK9lojAfS9AFVnKtr1SBSX2pKmZzEmTSfUtadAspaWe1ima-2RfwXfVUCVYrXMoqhwpEZ54NmnF-Sdkwz9BbFzSXM20LpNKP7E6LZERK16nX9Ae5pO1wbEP30WLJen1W4W-2SSQHHNnhF0ybhi4iXIubCKs_D_UfNgSP8mNTgzAmK6C0YdzRo4VlPy82qlEnK0nS7uL1X4xPgQJzU_DSLSC1OxjL3ae22NGC1R7hufs2aZNn2kE6BjfLE=s500-no"}
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
                  src={"https://lh3.googleusercontent.com/92y8sJhYf0MIwllSjzqKTDEANN_NRpFnru3l0PmX4w1CrIkqtKn2LcOdrkOaeVp-AoVGcEnzZEjZRt1D_n1zbmrXgMgDCqVaQcTDUzbjAEuoSgPOCJk8PjOj9B7YxwmFu7B5No0S4BHWCst1mAy_aKeHz5MQYbU7yvEoRo0jV6Qy2I9sFsbW5rcj-u7-SLIF1aBGdTpfMbvTRP9ZGIB3OHgTmP53OsOeeihYRgaEcNYpPIGMWJZtEXuWRVP1XpgyMl7hNo_JCsbB3_UqrbsD9U6-5-tfUIjt2Yyzptpjk6U27v1oQfiu1DqolfTqWjICU2BbZOMD1m010LE5qCam2isyP6wDSgwS_tKh8wABPNTq__BxfneejLiZyO8Pg0sc9zKWRrvivIa68QYQWZI5FR9eRCEA8_-u9W6VAXpuYVFgfI4AxNiKlRTKx8BmetqECUi7ntCky9JPgtGiw_I72azIOlcVSixdAMNxLTP-c_4dd98GNtBF1kXrTQh0b1GcyhXGx1fhrmnS3odrq5ExuushYKeeuT4tIynOfY_VRoTAx_2gsK7FSIDr4zbrRS20cuUge2hiLxCgW_lF2OGITmkAa6JuHQthD5lnysO2lmAWmkO19BUnfBFwySoSqaL99fEOcX7FyeIxASWd9DAqldm4fF6pJdggXBLDTK82_awe5A3AXHtqJA=w500-h399-no"}
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
                  src={"https://lh3.googleusercontent.com/bJDcKP9ibQWoqNwjjL_KKXFMKXcfMuO5pmTLjIaVgSlK4z6yMVOQY3iEa6WCmqRZYIM0ibxoksyx045Wql-3Au8WAjLlgpELGqWVo6Q2cw5XcgfMcyoxbVaRrdnqujuURzO7FMg4XHa_--nCOVm99H8m0xn67HZ-phW1wzJwKXwDlvhI1Nc8zZZrER2b-eVJGSGA2jR1yXZHULCDFntn0ChWoBsQgoiaWbjXOXL2n-F9EGy76U-MSUropjI73CYpecAYix6NZm_RY3eyFkRwYWronJ8FY62C1GmA-HxYf-h5QCD38R98nG91KD0JtuaUPw-wAmrFYjJI_4jzl9QvoK_t0EMgmSPgV5jY121PqFlXzWfU7-lP_ThB9p2hmHJG5tOzqp3aZCsXN0owW_PEu1eDaSzeVJo8TDj9dBiiqu2-BDOYsitYaQFlzZvxw02AkpWuyRHeCniKvmT8gRX2f_9AwsnvbHR6BZMylg_V3FEvRv627WOmRP4iWuBAT_bAh_jcMIPNA4mo8FFV8Y5tpd0vRLoeSjVrPpxPDj-eoQrvM_IfrSRvgU-LF6eXFTCo8xfJ6jAb-fPwpgIqlXkeLBePzGfmhIueCazlDbMOrm48FunkETc9F6pdqAdvAWXO3fpq38-ybedZkrkCcKTfa9pdZeBQoGRyDU5ykn0AvjlDppYwPMKweg=w1000-h563-no"}
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
                  src={"https://lh3.googleusercontent.com/gXdeQF_O9bdjsPmmFAGEZvVNF_9n3Q8ZQYXXIfq5Ky_uRzWVOwHxikfodA9h0H5h0m7y22RcnmuNWIkF4WKQuq3pTDyZTa_Nb69RGO7J_z7UC4wKPRdzawKB0zV1bzIyl66v38zFT0Rgf4wNUNGlUhBrtTASr0s_zxpoLfU8WWk4lGeWIcpgOAWhnx-adA5rSdZi7AywbOLm8k4o3r5l_c1GTmnm9FTVvXRXc6UNa16x_iZyQv5szpXDn9AUzpjDiaJgorl7kJ4ZCEdKkQ-HZfTogUq9kYKMa2RQLOcmyT4wGoWBpDw-pz8eLyMNbthGWfaWzP1tn5SLMRpo2if7_-Rsj4W3YRJcRuZPmlvVrAABrmEsgB6nfuRKRqh1Tyi8JbPEOiyBm3YLxIJuXRgv_J9h2Iubrs8Cx8qZQwM9UeuJq34i7Y6Doc1qlP2_6m76biUmGyLJ2qh5gLISzumw1Q7gWBmPdaUdBWalV5CXR3L8nq0FtIHcqFMteDLEJYKlWjdUBXhWAVYjqzoapLyNtRdIIlOw46wQvQhdTBzzYACloRaVP_xYJ-H-8FTnsWB8hfKFGa-jsbelyTOMJJ-2V1kIObmxIy-fZhi8FLnxZK9VI4J7CjAeZbev-KYgrcDZEPhhXjLkKRAv9V5bmTsin0xvWxLKjxcOLUGCTdunr2wpZD1gf7Kv3Q=w495-h666-no"}
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
                    style={{ textDecoration: "none", color:"#001aff"}}
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
                image={"https://lh3.googleusercontent.com/zFM2AFoXkKB2Rmq5fyICUfAT4qYNNxFh0PH3LWVVXjv9MhsXjPAzTfJRUhRkXVpls8LQYuaEDcRzcTqIb4CC-oCMyAJo-j3n0JgrVXlbCPZYxvh_1OqqWPoMyWuYOPyc71nyaLb7vz6r4XxZjpXHPtHpjIla8TWMaP2PCVngB2KfsoRxoalH5lr7IByWTrRMwDZnfmTKx11NHOZoabdOFAGIjLo8itGVPFPDrOoCdb3YKlJw9QBmApD-QVnK8JqOyIQtIjR4c5-6qZAqhWHJvMppMRmWNuvhS4GiaxIeWhkSpIzYq--7obn3MYVPBlx-iitwtD2NAfLZKf8tBFJjzW2D0pft9kbnUY-MfkcATLLSaWbDuE8Tu67cML0KRZZVe9ymx2dNDTTz3zlbuYiwGDhXQ8t8aQ1c4uLdnh3sZQzKpctKOOQXUuh9tU2VNBcRhNQhcNEh_bw-UeABovla9gY43vmOJr4CJLH3QHwUqnqSxpKNm2WE_9Ce-aPoLwUb7e2PNfWCOw_Bvimvvyv8JCZQnNDG-V0_OgDzoYB9cJeH-9FNK6UwacJUOWwG9lBriPhU1TnTgtwcl1nQtiIMcekrjwahEEA4GDJ5yrvmLoAIoBm3H7HPq4sz3IjR2mUG0BGbmlhOYNrAplJi2vRRU--7l0v04Lla6KT_YpuJn4RQpbxZqYgbo1WltLxCYaE6f5Ul6HBO1WyTTLzeDdQwU4FsxA5QhGu0Led4ZCiRy7NHtTw=w920-h506-no"}
                imageTitle="UAI Team"
                date="2018"
                title="UAI"
                subTitle="team member"
                description="Annual school sport competition gathering 1000 students"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>M</span>
                  ore to come soon...
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={"https://lh3.googleusercontent.com/pWYC1VR3dEY7zBlbbSxDhcOeYmIr9jbO-OAjjUR4q2XTKP1OETOO3q4ofnVR8gVUBptuZg7AwSqJvvd0RB3T2ZKR6ZCCnaYRV-o62EQOOgSFfkKEC04jbiInBXc69_D0D_SF4qOqwr0znEQsjak0xj3wuqpKhWww9hiNouOuqTORcNtyAj4Q3NCg9DtMpaVbGw-cUiQ5Pu38483Mieq3zIXpuIWAmKfnpawWX2bux3H3eaZEtSm77Da4iv8ZrH54cBvKbQBn6Vtqlmmch4obzlhZ-k8_Y51W8prXwSSOBBSKSRp3PbOWyLyK0VhJvQK3Oz45DBxLCjsVnqk86NpaTxDBMcvp0Gz2yh7qUQhhrCKUfKf0JdkaGgnVtn47xu6pUOgbHAZkzXYWaZ1FiUjZnAYjKsRRWOjILj4U4KaY9_A0wnpQpt2MVyK4dFLGjfsaaoTFDn4J1lIDRR2om2WdPCnHE21MpKtoPjoChDKdqHrPUz84oe8OjdpySvcnFXNaAHe_mlsMK6ORePqt_oHZfgNAVI-CNONrewMcbCZQsR9sDS-pzaX5MiwgIZ6Ls1OUW6_8FDACq0hk38oP8TCxgCJGeEyWVzRTUok8g6-6K3dIwxciZRAX-ZhAfEsM9nGhSfKRQDibnjyA52kzmfLMH1maswNSukZIxRwBeHduQLuivBOwmg47CYCo1h0iT2AEh_SUGPx9l44BEmmuSfsekv0oTnP5Q5-YVVaBHmlFmLwCb-0=w920-h540-no"}
                imageTitle="Quadcopter"
                date="2016"
                title="Quadcopter"
                subTitle="Personnal Project"
                description="The math behind an arduino based Flight Controller"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>M</span>
                  ore to come soon...
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
