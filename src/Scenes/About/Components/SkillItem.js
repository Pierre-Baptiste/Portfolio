import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#654321",
    "&:hover": {
      color: "#001aff"
    },
    height: 140
  },
  imageSkill: {
	maxHeight: 80, 
	maxWidth: 100
  },
  textPaper: {
	marginTop: 12,
	
  },
  containerGrid: {
    marginTop: 5
  }
}));

export default function SkillItem() {
const classes = useStyles();

return (
  <div className={classes.root}>
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={6}
      className={classes.containerGrid}
    >
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/VxQN9o3f0miCSHp4qc0DuCP1fosMokVyYD0WbRa25INZk9ccd_hHLiiVLP2-2C4cJtyb82P_4TLkZ78e3s6CKcCzgH99vjtEeAFrmEwm3fbnzJjGqzSlTP-NMXvTFjsfnc3ICycxr3a5oncL3bBXdcsBS219oRk6vxUpXqpYNlhwzrM5zWPuy9FruGF-xER0vhXrCdBmYAD4YpQL9qIrx_FkMeNyer9SUPYxRH7BTcc7KxQtxS6ks5QamUzOUvMJTIbhUO_fgnWbLGTBkORFzk2ULX1h2GpE9sHC7XWbyt3cHp8b283Kq1Gho9fbtjUTrVEAC0grHQ3vhPc02C7VTvRL8E04FQTtQK1Q5DO8pz8trsY3FocCumwjAP5fw1-LRpc8e-aHs210satZqQDQ3LWFmWHCTu_IQEfZwT1IyRzEnjpJVm-1nbSjlk8TFKC_0pFWG41aVKdINaFCxjltNtrs_e6QY11cWFChxEqPZEblLXsw4_iJZWmyFiOO_qsFNOPp4Fxt0rB6peRsbd9i7uYEvoGfLbgDD-CJliDoM0u_BZnBE63rzUMy3MwCobbq2DTnEoKXcVjoZ9Q6V6VPikS975CbF_xA7n8xlYmfJwqVk4aT0XE1STw3z2YSHJ8LYz41NSUdkm42NuZs_xKncsKq9nQeYj1bBU217w3QWZ0KihchLFjxXw=w500-h449-no"
            title="reactJS"
            alt="reactJS"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>React.JS</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/h82RxRO5ZRV6ODxe9WEBDX3JjIkjJskZ2geABGCIELSKfYFjoWlWcP-RhY23niWIAf-TzhFcmgZjDC4vyyzYt2Ury3D9sMz27JqHuZjw9wULHIAesr4ph1a7FVqVnu5hWvbOnl0X-kpL1W43LH1bCVq6oQCUpX22b0GjC3vpHMX7DLk6OYyiNwE7y78q726375sbSIG6gSmN8SFGOOkoYLTd3Hk0uvYTVi2fYwFYhPd7vrka_uvI0M-M8SWl_7FiKboNCpThpXcLuoFCC_1pC0oVAvRujwonq00zTVd3eSUvaLsGNDY0dj8thtJ0ZdIvT_uTW00vPUcVIYz4JAKjXKXAjLdh4jVeVW46V1YcoNGkRqt2xvjJxitYdzwzgg1mWG4eCKdB6NtLD93hprX6q2L8s5K8Pte7GsKFNxaBdELitBlAgmCH7RwclYj6VUxubYHiCxVYmi07dstUU8hZlNOsN_U16Q9T2hVsDFT7oC20rKXmL_RcyALbJJLHpOtIModXr6me9fjTiJJHvbrzWvRIKGU7In6CJgGJiuR9CKdMtxqTMXDSuKnDoLRHiF3bk2lFxi9yiiWuKfnRDrWqimIZ0NzWkEBFbswLVk4trwtx08MmL8HzsMG3GrQg2-5OaFrw32hwk_NtWtcqYHAg5y2K4hquzW7cqLf6EPIGYZuaO1GCOtv1sQ=s225-no"
            title="JS"
            alt="JavaScript"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>JavaScript</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/aefXr8bShDxZ-KtuxM9OZ9s2CmDqNDOm1mO3gFco-dK85AEYC7KuRGaAXiv5ZGB4pCNF8UeadpozDDlp_wwNaW0eXCv-Bew8V7IT3OlHsXYInZ5t1H6EOPHyndppeF7nhbxERONPrPKN_z_3AvFModaNfn1QgOXGhBs95MF9ucE4_cS6ZIkpiNBOilvdphGMXJIiux-sszIuUjwLNT-s_UzI8tS1HCNkR7jcKMdjpUbw2FyWb3S_8XZv24gT4DQExn6mTF-5Ub7SRsit3CzWDWPUcz4biaEI6CJQACV_-PfuFExPJLrN1jkcmTjrwh3Egl97CGHi3zneV8NcFuCELbZBY-Y_FTol7-bgU3g0MX10fqZIuRqA4twyv1hcqIwu0quAKAIRfzM9Lfp0sJgQvPlgoho2Tb-E1TRKihPnBzCLQqIyxAtddY7N8WAz9IOBnWaQr_pGECDdx9-KMmQfz6PvXqY6UU8IadUMtiNZprjcdFXyqd2s7PMr8EtTf5qLTFlDIhY5B93_XcEOWK46IhvrRGY1_XYF48iLyh_3GxVsQkECbc87OMfTqg1BFMT9nfBv_FShnKU8IvSdWlkFgNqnXnMiO3R1UIOyJKObVfA5onche5YlQs_Nv51tEW5MG4-NhLL6ewqHkGmzjG_BHqV_Zasb0AZj7UADTVGalyOXeSAvVyq6-A=w500-h388-no"
            title="HTML/CSS"
            alt="HTML/CSS"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>HTML / CSS</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/diK9Pe8_GTZ1AU2ZeVapMRQkJfyHX2EQCRbih2PlzpPXEfTWkwRj8FLrgoIkucXiLsDN5YWCebQ3q4hP9ZrPfNEsMZQavRkW3q8RjHZGYdfau8GEbssCVHCn3Tb6mOpG1kDPG5_CTlU-7fEfjqkCLRLlTrkDZRrt1jNUnHzwnXXFmYlCMOEdTcYD0p_90d_KyUjYR6gEG35bbugyDy0w8APmO6VRoS9vsODChun6Lm7Qj6kbNjQDUNsHu5EjPSrPcYvXeP8xKsIz92UpixORN_p7C85mAAAPQNE_hK_rcDcAOC0vycpDIVFiCIuFP-eEFJiuz7ObbMCTIKYE3j7__3MC3561hIzpsPyYnH-RvrX1tCPlRqGRbdmUtyt1qpxsKljvgKcoXc9f7MfguuejCjDQbWcpPkpd1b9as2AV15SZvWhacAlIARrhtBCcqcMAGmpruViD7L-6Uokn2IdaysVNhJGUuMMB7Kz7oHudwxLtJP7QAPjoDekwNyfIRY76Xgnj7oBuD2l9lipZlu_20rXACE5G_ae3ZA1GQXX6BdFFNHClcDLGI0x56-cWyzqL6aO4DcbiEDHJNERufeh4yxlflRvCVZ78qkfydbdVXgXV6LMnSZpYVV2gj_1TjpGFFN-k4DKPHswSCrL8KvY3CAFhyObfFF4t0hWuyx1fepGRNzXdHWePgQ=s500-no"
            title="node.js"
            alt="node.js"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>node.js</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/q5KvWRaPoi7ojT5Z1eIyYc2fqlhinpjxVFN4HE_bStzVYdyYiFuvFPEG47jO-Qem9Sr2fGmEjbRA7F-Vb45HO3Jc1LUbT8_Eynk3kcGe5QTZi7KrI6kr8BVktk_zwGhTCMPoKFeYBCf7NqAu2FGA5pVcFZxfEcS2bY-5dJVVHtjz35jfR-sw_rCEgZqFgL0eUjajvsApywzkQcxgUdVyOCCSXhE-H4azt7Wvaj3jDmbHf-zz-T1iv5Lw7doLZ9AF52ZD1xCiRJqXxYFjxgw43_LHsV2S2COyStvQk_byPsAeE7YH1QpPieA1vzYt7lZLlgoZJJwX5gAt7KCtg944GZrsa5rXOxzgdJ_Q1uQih1--Yt597Tv8xL09Ng1UBh03aI69FgQFyLLRpbEqfguGKNvT2wAm-OvUeEUHb6sRUKhFIY4biskmccjr280QPwizsxvoKhUltPgrWF7I_VM5ySm_78yh-7qeg8m9ws-DokQPVkkt5HFcnN6oGi673n9QsrEIizVSpfaWCtFBzSRqtfLTFOnxCBufOJz-2kWWLh34oxI7iSJzfv3bN3hRdlYmir3wH34G3iLqdPGaHYj-jj8hQtjrTiKNpoMUl2T2vzpjueMnD34LzG_RxBfND6U6kN9GF1JiqmYjYSIMIJyCNRveSY8iEWnEtVO7yFx6nQ3nF67qIeef0Q=s500-no"
            title="MongoDb"
            alt="MongoDb"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Mongo DB</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/pH1n2vsVy3q_wR_mPhK_ju8bEvHEE3q-CplKB933_7gnGDHMJpyw773lYlrpB3y-yd5nx-RjbuUiOIBGIzyQAGQEkS96GrV4peCQgUA4rop3iITSUpzEbaud4Tt0HQG8lUdALG7lF2kZ_FiJeYa9V_aMGa46zNH4f25e9eWSVb_vOpwohsQG3gpZIW8ZCje6GjX_wS06WI29KpEnOjxFjo9NNFgoo0hIJY7RpJ4l4VpTyjzIWG3Wx-EevqgC4TkcxHODqutlgOs5z7m3tx1Oa0e85HZ2-507GobBvwx-U-ItlrHpweN09sTU9pGFNkR5fh7Wtdl_eIta72WNR6Uwp9JRU89B6AwodTXD2SGXq7_cZ3hdFeJEv7EdjM_FTYMQYzA1v8kHEVL36NSR7lRj8pOO7_tCL3PJwfxAbrbaQpAdHBzvxofgZicUMscM_3Ru8NmdJqKBO0yoriHiyTqfFiYKDRh8AT-tNNIX_rYCKUcKKf0vowQY_qzzbt6JvdDlujRIX6JhtgVCXWGKBmLW_MXDLVD9lBWyQjFiBTp-3EUYlsbQ-txCsMY4TGVmy_73VA5FDlzfRnakBBzWrttUAo86LJRklHLOfnRWNnsFqIkHutKckEJfsWyv7V4tamCa6FWYw6byhJU_rbrFI-9ApJ4rG25vA2udD5WK0xrnPmsg91wdpFdUaQ=w227-h222-no"
            title="Adobe Photoshop"
            alt="Adobe Photoshop"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Adobe Photoshop</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/Wn7MLJtZhP8ONskNA-Po0TzM6Efam6XOoHqxStaZFfXvUobKoOgXsR0Uks-bfdkmiQGcVcBC41Yi9tNAFpYdQAmiTvpoqdBzAE_8v45gf3U-tMI8UY1k88pdCggGz7q8Se_qK2U9NDziqoS4O100TDgBsAqeg-1DT7yfSxkmNB0OcHiREl524G3016xf9pV7wxGqHeextElUlWz2UY0brQz9wUyZUWBMuXKu7W3Mqt4tMgW8wOarNKPwwp6UM2LnUhkIFrrqYqw6WglRasSngEBPkxI4AOd8k9CFXRnClQvsSopKZ_ifbtfp5J46MTPmckgGn4g8wmYtVjd8xvcXNUWZtz17C5FDgPMmiGr-DxWMzzy24Q0ByU-JcPpq24OUnQTRmcoDpzsnMWcxBZFUb9Go8WoLg0RrLI0NDKpf2WHqgplpXFSaxv0LzKUq-Yvb9tKSEduKNmC7-vpi-pGfDh8L109TVikkPoevuJv1Zq-kwRJzs6kObyave-RY-X5x-IQG4mzH36B1SceFD1F0XuNn_C8u6k63FMbHDBbNAOH9SKSQpPnqKlZcCpltt_p_OaerVmueoEHC6EW4EOPcS9OR_EFeoqL4WjwONlj8BG0GPho40WkEv8hdza4WVyqjMe0nAPALyjMl4aKuTy3VvAqpBKpN2Bw9EgrL8HRD4kP7F0A1S6hWqA=s500-no"
            title="Adobe Illustrator"
            alt="Adobe Illustrator"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Adobe Illustrator</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/JlhuK0vzreuezWcqVwBHeksE09NfeCuvRqzN7wl9OA86bglDA0G144NafTlNGaTrKUDrpWkVRIhVlLq9T8IV6qM-nNCR1TCKoWBsQ0thKDK5741PpXCmgbB6mUR9tS_0BvCk4mLPA-B6v6SdEnLhudA-PZQ185BocEIaXLzH-vlwV01z-vdl0yqw05GckWVQOmq-S7CXJoy-T_6Z6WkyVi0V5mI42xLT38tToq_gpiqe_ivSj-maEcnfUKZmByyO4ypK_OOUHjxxvHP69vPKRr80-_2OwEsCK4cDr8cQo80tB9ymjntQTg4w0iC-Wi4zG2O63dzOQ3RxFaLAWnZJFDnvlSyUb2tI_ToQ6GFm_bkF_ME3CxcRoiIgvVdjo-OWevEAlp4fxL5mxsBRdYVc3pVnaB0eGA7XyymhOTEMzMxIikBaGOCfMYDwfIci_20J3ob3Lx6ftUh8qWfehLMqdezt3A0PJqOWG6kDJcR5IetkiaOW7lOYHR4pJjpsFDn00E8IUWPMlsFJ48RBJBwQXElOzKHJe_Bo3q9ONbSKKAadgDmRgUNwvfcbzY63EusxbQGdQ2vm-2c9FlTwedlwahsGyzOrSvDVZ6k0vmu7cfimsqPLXU7hyMtCVnerwrGPlS7FTr_amhEqGNSJKxEbusx7cTJcEho9eIv39edsIAZBzEwTaJI31g=s308-no"
            title="CatiaV5"
            alt="CatiaV5"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Catia V5</Typography>
        </Paper>
      </Grid>
	  <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/YANbVWvTxb-0oJwOs23nPC8-wvXOSVjQBXFFijDQVse3kkT8HtX6xGY_0reCAABWxEChO7OSwyY_uqmVUid195n1Ms9-QQeiZMjeo80rp8f1fROp4FPz2Da5nd5rov6EMoRRnU7CD7MdRP6yi4nHy1cCQbcad_M5Eg3dyEiOMz9BhZotqPxWORiIAwtjj26_zZkb1aFcyEWr1PdgCszxPVg2NlqCOSD6gmyhaTSZTa_nlM6N8YryJmikeZbk14TdwNbPt1VIGVKT8Z9sBu2q5_VGJtN_dmHtfvIs0YgJjodBsn0Wca4uYuoXxyZp_KePrq-B-p6BvHfSG8DfdTcdWz-12adBX4_8qe8TwQtZlZPwlNRFC5P7B5UxIXdcZPSnZfBmsWSksBa2f2us-eLGVTya2OIoGaZk-h6ad5VY5PL64M_MfvnuIInmjyVEv1Lpg0J-Ys2BZ-Eck9cUzXSlXkqF6wqrSMufAofPeAqZbhPYY9rOywrpcbsJYmsoLikSep4pycexCdZauKJFZIyXy6AbwRjO33lXkcfAvC3_WgUydGdJGjs8u9IKK3SEtfeo7GBtWBFMWE7kKRTTIJxCaPk9leph0awLQFloPrMFFWV7Z3nHouuIfhcopBNANlGtKdiIZOUo1_HW1GW-KSkav894E7KY27DFveIg98YkgCz1flkIRNL-1g=s500-no"
            title="Python"
            alt="Python"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Python</Typography>
        </Paper>
      </Grid>
	  <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://lh3.googleusercontent.com/d2SlIezilCI0Z7ZatK_Cb7hl0dLV2tatmgjTDBm-TiMCoU7kSoetF7U0YyuM7TZSjdQ2uFfc2H3zLOlrqiehDGVWqTZQmmh431fX1HH7FYSad7lMWsYSOsE0yz46BsWSBgJ24dVc6HPo3yi6v1wIPJwlQvJVVricoSbImxsCEic1Jbbj4XJvZanqDLRZNcByBbbYjY-N4aQtd23ptvOH1p0C4hhEpr6tU23wjtwTFKOXMx8moMegs9o14ZtmmxBxC5_4MflUPr57eMUk8rxs92fjEG9O5JxPv22wYHKrmo8A9rqs6LErMfSgw52laBMdCwQo8BNS2cqNK8VAF9jhOFPF9v8bvuWJ6RACCw7MN1LnvRee00lDH9LdhcttRx2TmCml2mnJaTLs8aJGVILwqSMMOh8Lt-bOUBITmwhdFSPYboRlO9Lkz1TiSg5lrPS6BtzbkbpiBaMI19eVAa_CiTB1jcQ5nKlKDqf3LKXIi9p_sPMBbTgj1Fk3ZEAqPGgJPmEN19d7SAEuIiFX2Jbr6DkUqCT3GDXSUUqRz2lKcmUeKOAl_B3wuXojUv6rvAUfWkB4s47mOFcv0q9ThG-ZpJnlCdir4TYWe-8RjUasRy8qEcoYFLcE3wnr27jzzRpxV0w42utPAyRHOFpxquo2tBIo9OnHsvn3WhixfbGL_yo4MQvv6GN83A=s500-no"
            title="Office Suite"
            alt="Office Suite"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Office Suite</Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
);
									 }
									 
									 