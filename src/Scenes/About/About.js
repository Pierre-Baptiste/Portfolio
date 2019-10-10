import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import ListItemElement from "./Components/ListItemElement";
import ImageBox from "./Components/ImageBox";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",

		backgroundColor: theme.palette.background.paper
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
	categoryTitle: {
		fontFamily: "Roboto"
	},
	lastcategoryTitle: {
		marginTop: "30px"
	}
}));

export default function About(props) {
	const classes = useStyles();

	if (props.Language === "English") {
		return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 03 : About me |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            Want to learn more about my career path and education? Here you will
            find everything you would want to know about it.
          </Typography>
        </Box>
        <Box className={classes.workCardBox} align="left">
          <Typography className={classes.categoryTitle} variant="h4">
            Work Experience
          </Typography>
          <List className={classes.root}>
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/_aiU0pvp9aAKQBWjOLWfEpxJiFZhnUc-TXZPBLGJuKTOkvppdT7NweMrtGfPQPq1iyytStQJxEirdUGUzJuJtIAbEkMKYdUoysbzgMuNCKGpCKfinKRdSFTDP-ioDentKu-2dTpZcmas9s8qSpy2C-KzLRE52V3Z-XdcVHCeODoXRrMhyOzTCAzvSzIy0Q_SQqqRgkpjloPVWg199ygtMgAY6tmWO9AAdRMA_5O4CI_eP5Ted4DGh-pq9gmC61tHljeEtPqQ79I5VQFZEEEv0KZkUt3PjfYc61_8dPLlmUKlTJh0sEEm6w1EIxQTCpz6cgIhx3g09Atv-C_dZntARzhBLvZvrf2Ita_yddAriUa_WAYcKBIANg0S4zdDYuU7wUu1nMaYWAH7RfAsUTY4SozFObN84k-vW9u-lzXGZSYMVp1ewo0qOL1lS3OrIyfgvisXrtgoBiftG4i4vBCDuB8M5NNTyvJT0FZZEj-vxItbgSnGFWd6KNHZLOlFEC5P3575LWsFRWwdXvj2Qk3R6RcKTNcpayKJWbH2rFMMVgeLTSg2gKRMGkzgMKBvBqDgQpcgb_3SPKcFH8250-mwgMXsTr_Qzp4XkYtHiRc1X7RsBApDOu8DhSjMG11aJjOt9UG9mFpCUh6JVA5HHEip3sXjZ7FPsOrvVbWq6QV2-wKHnmKnGOUhJihdcaO4PO516aPdz9TSLegiCYc5OXrRfmyq-Gl6FjYf2aMkqSnrp2Fzm6U=s400-no"
              }
              imagetitle="DT Logo"
              title="Business Developer Intern"
              company="Design Terminal"
              date="September 2019 : Now"
              avatarlink={"http://designterminal.org/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/nL1WNNXXCjxZB68c4aS1YP9KNKupdxcE3TeEIPYc3sAkkr7Urd0RrEAAJl0azezncg_ewna7kRB-W2MHb_yoiCRw_TIMEgV8huOxveUTOMCBF4TEmoEM8bljjMvzsjWbSGDoY4hOBGeaau94_BqxADD1sCWRtQ5_ZoLkHCIJstNLJEeFwOI36HjDFtFVXrSAa830VCOxuFnQqQk69UkcF-iB7eDg0w70IfkYya_SWVQA9mabsCiWCeFAYhMMKzdDbPK0td_4CJ9HLJXeMQFWeGDaLY2_0Z8UUV6WO3whl0PlyIhUefdLzpo_xHxg8Dce2nA6-bDk0o5Eyghvb-2MgZeEKb6rA1VXELhxpTW-SOFmDDt0ELY_xgSlsOYc5OzTVcbvQ24eegHujFsmQ6SoBnt5U9kiDI6Uubv-nMnW4oNq3YqKAZXN49wHZsXNlGYySI1mt--uzrZv0bmLliVXg5unMjxpjjZkiw2lXWkjwMfrtebF4GvesprJdNaVlS-EE01Dx_x4CSy4Y1WZDGgPeWusH3IitczJzn-FoXvYMqzUYdsElgEXbY_AI5FlrlnqQgnB7y6LxXdHFYBrh4fEOE4a0Ac_QgHHui7JbJDXOrPP05TQl2jxVqM5ZXZ5W61FdLrpmCkBjD7IxwSoB1YtsEG6WKLGjXw-Qq67-4J9geaPZb1tD6ohsQ=w1187-h617-no"
                }
              />
              <Typography paragraph={true}>
                Design Terminal is an innovation agency that builds bridges
                between startups and corporations.
              </Typography>
              <Typography gutterBottom>
                I assist in the business development division, and more
                specifically in the international expansion program.
              </Typography>
              <Typography gutterBottom>
                I am able to apply my skills transversally, from the knowledge
                of the startup ecosystem I gained through my current startup
                experience, to my technical capacities. I have done:
              </Typography>
              <Typography gutterBottom>
                • Created a tool to automate the generation of business
                proposals
              </Typography>
              <Typography gutterBottom>• Market research</Typography>
              <Typography gutterBottom>
                • Identification of potential business partners
              </Typography>
              <Typography gutterBottom>• Social media benchmarking</Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/MAOtf1C3oA0KwFj0SmYUZa58iXT9cUCUEVizCnm2wQ_f2sllyUKAN7GmEDxxCNBzXZ7A7hiQMuEhamAFBfVPoYzHX5SVPR1X2EJhe2SEsVtfMrm_dZqmfMKr4YUHvxS-0euGnIYDXqIJZtcwHWlMdyCCCKdN1XmkWCV_mwufKiJ4Ek2zWbqQ4j5S-XJtC8QZ3KWabUBKB_z6SV-28XN39QdHcdRp5Odcox7R7iNwRtRfEjDpE-mflMYN-WM5aOYPeFfF2DsV_w0PqFYRcdkF5Grkmv3adeG-qa8TlOX6rrH6NivukRnt5vLG9LgtviRQqcuxnvQuAudSVB-zDQH4CwXOISJ3p6TCs2cBEKlfcdmadi-RS7c_nQ0QCM_3ddcNtBMtE4jzXV2DndsVEIgKUb0MWuaW1B300n0xgQflVXfdP1FQgqnff2UWvd1keFic-vtWvaOYxYCjvSJeUiHNnsP7P5Z6J5-H_TYmn2EuM4kXVcRlqmnkZTtevhOA03mn9C6Y51PJPj-MgKP5n1PwP0mmiF6KvCZhADUym5rF040G4Z7KWG3MhoMe3wWSHLykClluHRpxb0LNpD-nvbRL1sPpB2BiZ6Fu0fpU8Rs4m_vmjluW_OzjfTHqCUq42hLUX-Vr_GNmJV8020cr2CC66tXxHVsd_8guzvQSQRDCNoH9gcrrZkA62F9UV9VCxMhAmokpmA10XpKfKFTm2_RbAwRbdNpul5vI6X3ddEpybWvpSvg=s150-no"
              }
              imagetitle="Leafee Logo"
              title="Co-Founder"
              company="Leafee"
              date="2018 : Now"
              avatarlink={"http://www.leafeeapp.com/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/OvLTqXZ6gI4boRS7PgKnOuhxGiiqQLS41Q_dr5kMNDQz1SqJNaGrBo2LMxIfgtb_7_Q-SgCyDynvlg-iZczVFPIDRs179JTPxqjZj4XvP1OI6ti0UdLI6frXils2evT7k2tE6mkl3VIjAu2pnJuhNlkK4Sqade3UaEJdptI7xXTQeoKtP44qk4eSKQO53r7rx83U74cQHV--2Mmh1dS4Mcme8H_32iPv-mBaX-XzCjE5wbKqjeQK1m9zjZp-URDiDZn14f8E57LJVHQzyMTRsPqPNSeX0hpzpwXJC9rIEC94zNNurw4tuGvBMa2k_pwrum6x1O75o5V9IwrkY2Ue8H5CFbrfj9HT9H1dRaKgUheByZXqxRfYt45Tkc9_-LCDSNC8HmS54jt34-28HwrRMo6nsOOsPm6NQ0ZD9Lwqd5F_ODatNFVeyE4zPswxLvgn8as5JgF1UuDSq1fk82qqI5FjxHwEKvOo1Zt_NPVFHClBrvTAcF6KViI0A6RN8hNGbxE3-6MKN0H7z1nD43X9ltyOVyZr5A8LwiGEhbDIh4S6qM7HUX-lVB2bKSyNn585SLMjRKT0ZmFeo7mvzkQHYP_jcK1IwY80hspkBS39Dc5mmTzvh0tlyWo87prl29Mpwh59I_ndW3U438TaSCECBtvjyBadvfBo7edozpGJ7hRxvs71Zn7kJA=w633-h667-no"
                }
              />
              <Typography paragraph={true}>
                Leafee is a Personal Finance Management application that gathers
                all your banking data in one place and estimates your ecological
                footprint from it. The goal is to educate people on how their
                finances play a role in today's climate crisis and create
                incentives to reduce their impact.
              </Typography>
              <Typography gutterBottom>
                I am responsible for the full-stack development and the design
                of the UI/UX (server-side API with Node.js, Database with
                MongoDB, and Front with React.js)
              </Typography>
              <Typography gutterBottom>
                • Won the first prize in the category "Smart Eco-Homes" and was
                2nd in the overall ranking (19 teams) at the MKB FinTechlab
                Hackathon
              </Typography>
              <Typography gutterBottom>
                • Gained an understanding of business models, business
                strategies, market research and personas
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/jsUFrCJw0D9TuAqjnwQGdmT0cVMjPgQTTJqqQ6uJ1YUXwZ2PJJ-8xi0YRBzfIQ_BJzYUdfTaZVCAolZgAbUBi6GSR5eVpsEw10f622oV61KPgMUlw2-EAHVcz7Y6SzV6GbHdFmvQkvKrC3M125nYeFzFfjlPjFDFxdcqBnXsY31aIgwdKiMEjg6CbdS7S0NL9QhlTn7M_u0P_UMRWuAhsHgkfiHRlgWqD9NMx00BQb0lxBuB093MCPui75twgNzGt-xNpGHCFiJ3KXSWF8GoA38__LyL5sts66flESJaBi_LxWha5p9Tzqm8IBGdedFMsmZe3Ss1wwjvhhw5kkXcaSw6Wj-zk4dGM8fI7Of3dfr_E4VdIJSaowfx4wWg2u3JVFNUP_O5llsusGZJJCX_1skUuqUh_hVIfuv6kuxC_aviceZhWZvtseAZtgM9vov_U2Ab3DmLA0jBNIU41EyJQbuSbv5hTa2zdDGFa6ViFtLWt0GmGtGxcE33JqcJxdJXF99w4pUznC4j5J75NYRA2wWUDxdGwrS_y-ExSFcaI__rf4iBcAkG5AuMbGFYqhgR3HhWGYZd2w_QtzpDvOll_u6FRxHBFr-jY08jLuzUt0w6FJ2LcWJsSBFGTpXLKiw4H5NSoM21yaKxf070URZEnlkldA4FfoqoZF8CNO6PeaZVFXrxF4e2Vw=s318-no"
              }
              imagetitle="Indelec Logo"
              title="Set up of two Lightning tests sites in Rwanda"
              company="Indelec"
              date="June : August 2018"
              avatarlink={"https://indelec.com/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/1jIUtZhGs33Nt3pEr3w5mpWqdtyEk_Lsjbp6Imh7JQMnR5OmJ-tfOCOdfMt7r4ERLMVtbo7JqA5bnLx6BZAaG8SKko-HzLo0xLSTVnoDPdQFJsOUPhTuOBtOcxNZ5J-JwyQt55iwbXwVSEJwHNAeLaNntm-sJ5-Zc3wVZxHc8L4KqAopNdqw_p9gUqR4ogeqCfTLwtsYKpAelFhmBSG2PJ9Aop25j-oY9xGwV-u_hv4MzCeKYuLqEPYcPgovcpb-dkWnqspbjV5YIpe-HN3L_jXZyMQgq38ORn54fP4evXcz_SkzGg0ob9MAp09QjJ875wJG5Fi2At8x5p320zFABF8z5NXEHrFB6Ktt4NjQwg8D3b7VmicJ0CgU_QkMAP6qiQemqSUS8Dqo7egvUgse_5iyF_ZB646vL5n-_WawaCuRxSbPKs696XUS2OSXMNYqHVV-5nTOzJkRTDrGgtLOjKtKadUq_awMCniDaJonaO4LBYOWcY4KLoWsqRChYorRVzxtEzBbl0Zqem6Jo2922J8s_Q1tckmIMJM2N6uoIgCoah_wW9nIcAAXGpRC4suZQQvuJ7oGXbie2MqSAnv3enM5Iv2BzqdvCOoL4fy5tl7uYpnJ4AP5vCDwKslUkUWrWdereX1t1ViUG5Sy2fFN1QdhzElHoQJpXCBpKSh0X2lqEBZ7xOTlLA=w468-h260-no"
                }
              />
              <Typography gutterBottom>
                Verify and maintain the equipment that was already there
                (lightning rod, surge protector and communication system) and
                set up new gear (storm detector). Writing a scientific paper
                presented in an international conference about my study
                on-field.
              </Typography>
              <Typography gutterBottom>
                Negotiating with local authorities (minister) for a larger
                project.
              </Typography>
              <Typography gutterBottom>
                Communicating with the local population to inform about the
                products.
              </Typography>
              <Typography gutterBottom>
                Writing a scientific paper presented in an international
                conference about my study on-field.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/jom-9ip11dRHe7C1gWm38IMmJQs43oJBdTKJDF0yy87zJYb3J0gNRaJn6mBKusRSKDkJbWGTjHCKG56R9QGwNyMI3IihefQwYxGh5mKOpD_se-wqVnr3WoLJcQEa-uVOzCoxPKfdnAH6RF4-glr2-TrCfQkSX7m0ggDP3a9VLq46P54qER9RiX1Fpjc6prhj9VAnnHb8OPLWcPZ3xWjopCes3vlRlgrp4v6UxBjzWQct1IICv-wg34GAZvo8MpuIodojLpw3A_mayrRdqLjR8_VFQJ32Y-dQb7pll55HUu4VJA6GkxyA51cj1XTTLs7siIX8QN5PF3uGu9wCRBIrV1PyiK2k0Cz-AWKXuY2JxSsxjNku8yKRa1o7oCscgtAelm7C59YIz5ebYpouKjkvs3HS4XaCP2l2M_a-sDnJZ4DTCC_NpU5R6-PVMrZLyFUbVsjcaxrIOQ50sbKe2mMAla6DFZQT24n2pIsjlBtIA7PNNI8eB1ykMDIqgWE9afexPkMero0eJgfyGBR7P7aq7S3fOpMKm5M2HccI2hXkUF1lTRFfaYAYTzIKybdVB39OlmeOg7C_bw1LQ_V4pB2hh6-2Aj52cErNHoOURMchuCjfqUlYPGwLB87gy4qw3uli1j7kmMncrsmrykD2S4ALqMJKpanfLopSIRGKtZkgpBEkjpCRPoY4RQ=s250-no"
              }
              imagetitle="Colas Logo"
              title="Intern at the equipment department"
              company="Colas"
              date="June : August 2017"
              avatarlink={"https://www.colas.com/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/he4L-29dAab3KbM9tQ8kmrYXqwYE2-nWDg8bfjhYS77ohE46vC_npbsinFe2KEEnyNmIV4tkNnpV9Hp8tkJDlzDuQvceXwSP5P4NCi0ICu2Fy9A-9WG5JmyIK9fQadUJS27b13cQB_9yNV-H-NzQVRwHQ3XZfjWpgVIL01x5OX46oG87mafDhSAbKi1YNJJJbiiYcEudSrV0cZg4oM8Fbs-oNx66S709jxzO5kQ2btsOd38f9nDecmV1s6UeyX_1SPW4WicCuPE8q0QE_JnQCi2cTzVO1V7GsToE3XBg0jHEvMHL8J89yjsu6_gcxriZozKwuI8_GoafMx2ROwAcgqL8YAEkVazzDfy3bSHtSU3kKfmAt5yGAkABPYa_brcUrHcCfkMfKgf9_LrgaFoCCOOUBxvrLGzSzNE2wqyThuPsIGs_UFgI0YEg9F_gs3pTQIQ5dZf18_uO6FwscTYGKUwfoJnay5SMQRM38MR22HOyJ1zfxxe8-bs_0Qm70xVl0FB2Tu-FmasBPO1DEXwn-ikZLEKE6XaHDRhihw-btpXhsyqlo7iyLfzT8Ato5K-9z3YizuJxSvZtm8qJMsuhgGMRMXfWypGHk-dBuqHtZ75FjbaDZcjZc3iunhk5Rls58iB9kGnMs6_I0Mstqn_JvQMm60oVeyYoLlBkSV_iggpoBkOlCinLxRq2FDXhPkOoqCcoBP2g3L_hrnRim-s1cmM0eVhcc1DFWMEvox4mqOxjhyw=w555-h383-no"
                }
              />
              <Typography gutterBottom>
                Deployed (installed and trained users) a software to help
                managers of 30 asphalt plants track maintenances requests and
                repairs.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/Q23jvYCxZfiLevOSHQkPk9H_5BT_FicABjZbqfVIOqw6KqbREQfgc_ab6hQmEWDwv4EV2MCbDCyG0PUChLrS67V-kbqqObCr48JLDpB9twMgs-jb_UHTsIMoK30Wo_4Cf9HU7C7zYpNwqiC7G4v7TbPio0RcCpQqsjILEv_zbbRix6rog-1STS5wqb3yQkVr3-yK59xGYC8i5C_q_8ofNPd345WODXH2D-kllTnC-UvSytXf6DVrUi2WpBGliZkcoQYJoo5PeGl48_ftFxNF5tQCTt7KQiNedBPySDRwHJUqvKDeE8y_RCq3VeNwXWcL63yFcNHRO0qEhaXYIXPJn3bNjqJbZNW02qNYw0qTPFZ_TpUnyLLA8XwEHxP8F6YqDyKMN4-L8dpupOEIbEHLt2LgIjpEUUj0w-_4tg_xsMbHZwXz0AuV_v7CG4n5bBjj48NLc18z0rB02ptu0M1rjlXayMzlHikpW6c_snwoGtHM22kr8U5rJpMBQqpxvGxBQ30rwWFX1vWOC6XHQ66yNn8VkajyfqRpwJTPkhwlsw5cIOMSvgOPENWF39fj0TTXphv1M_ZwR_l9Jeig4yFUeIXpe9LMOzGPJklZpfWs6JZHEC3M4m8YJl1tFlyF-1Dft4Kv4ITfOu2WvpBfr8ilX5LL0TdFqchz7aOFrE4XOvYSY2A-qfh5kg=s400-no"
              }
              imagetitle="Lovelace Logo"
              title="Maintenance and Administration Intern "
              company="Lovelace Health System"
              date="February 2017"
              avatarlink={"http://lovelace.com/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/l5t4ZvfvyagTHEPFw3YmgT4gzCPmCTH7SdgscDRAcxNbKAOiz1HvJs7IMHLdtLYInK6cC2FtqmKGDjlP1t5-HGiI_0ieM8TP2695o6yZnWRhE16b6_iLqeCY4qD_DqtI0rnDB_N2yV_L2b-Xzt8e_9bZh5u4BmmSB5SmO1VqB4B3--gUqZIbK3WDBrBea4GUEUK6jop_0JTax9KrbBHfhQx50h34ANuG1-4KJZ939rUI0EyrpVc-xdL3ywAy1PXWIbc0EpqpMz9TwC6ukqVD-AfrBqkboe0FIwTDmax9gEQKq9Vdt5UtvEpmLPv6wjVJLYDcBISlP-lv0az2cVOsRjnJ7hW4wqmVLMi6Ryzm-p9hfu3RDlODE3uksUadN7YbeNprjIGfAYWBlxUTV3v1oT_Ykbz5vSXh_OtaLhr8lNekYxUuefYYmnKq8_j97Ol8LO_SUiKDby1Uz8XvBcqfo8_SdKShdvRqH1qb3E7Hr2T8akRbANLy6_GyLLWcf8Q7xmQ3wNmpmxaPnbE3uvIlIOwmwMlRkeFYZVpa9_uutwaY-FQM91YB9CV08thbvsANjrM2dh8-9WjpojcefNXUoaKu0FpMSv-5MG0AJU0fEPhEKHzzRwKxAgxM64KdIKmV0XUHboGxQGZfr0mT0MdS2uyKAaC3X34CrjN9-qqBrW1QoluAGRL7URmmwkRBJ0yDjAM-d0AtFpYV-4mwqfO6aokErp-GzR-bwJPQXTrQ4omMh7k=w920-h436-no"
                }
              />
              <Typography gutterBottom>
                Maintenance intern 4 days out of five working on the current
                projects and as an administrative intern the last day assisting
                and learning from the COO.
              </Typography>
            </ListItemElement>
          </List>
          <Typography
            className={`${classes.categoryTitle} ${classes.lastcategoryTitle}`}
            variant="h4"
          >
            Education
          </Typography>
          <List className={classes.root}>
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/X5pPJiGOz6U8RwPFwdIa9woVSix3pzTzA5d9v686o4TnNVhjuM_fuLtl1xExJRekZ66PGJkrlJ9r5VzS-GqZ9_scplp1tIsAwEs_340kEWb6ChyANCbFf5cBwwGvDKbPkC7AJcYLXuFj3SMA5oxgBmAP5JeC2g309qgoJWfqikxR8vn-ctgxlccU8_lvHdsLwawYm4N2bxjIXstV5RgbHmNCbFIySOwmcgttuLYAu-8RmCc7bLGW-4l22K0f2BTlAxHJqjD3Dw5i62R7UM9bOGAYxbQ0lJYls_R-WzjD50rPvVnZM7KLT34VLjpwdpAp62TE36FU_igh4goqtXiju6Zm0RZSbzdeeEJrF-QkOSSJ5JriQzPh_Ti4LwAuARyZPei2JnOpA9LMfmcf_quWm9BSfRq_xhokaK8DHcCqQXb1pncSW4xARJ2gADHrk82awXslcLTRvauqfdm8NBJibVv8Cc1gNYKXfrpTn9wcCpXMMm4xP41-WewCBaJH1z10plMaE5KOCMLQuw_TvtueHfn0FdXK8YYPKEnELMRsjUvUSJ47159AK2_CwjMT0SmsLUNCgbYTpWF6CAB5BcRiAbriT_TAG2sXbwqIobxLrnLsXsrov7mDGGoimwiYYtfJN20-dFRnC7nqImDmIE5li3TyHK0NeRUq-Be6KvpvaJlipdX7gt5euA=w350-h250-no"
              }
              imagetitle="BME Logo"
              title="Double Degree - Budapest University of Technology and Economics"
              company="Master's Degree in Engineering"
              date="2018 : Now"
              avatarlink={"https://www.bme.hu/?language=en"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/0a-sP-eKmp0rd2Pg6j21UTAKfv_ESGzYzHkkEeq4M6VuwiVVTDbepHXSTQz8Hz3SN3LHHwMp5N_heLjfgkRH_-fxrnI8GeIVT9s81q_EXsdluXKnj9GpTBH1BOet2r5zsfIInxwybPgHBZ5U7YEonOAE6voI64uOZhGa4x4DvygJIn3Nl_YZno2MEIEKYQsY7kJ0HLnLway8XFXhC8hW8AkUoXlWgk9pnqa49vus8ApslId-IY1YKQo3uwSxS19FbNcM2d9vpsTRy74Bjek2sawIRr-YPlVAP3WTSkpML479vCCnN21Pio_3LGmundUlxfuPks_7wmTRcZhDrgjxC553KhQdHB4Lc-usPaHUoCeTlvZZoVpvpDrmY-XfvOEqNDim_7rtKBs-vHvBxYqA8ycmeMhd5Oa1KDN6woBBZt_rGZOnTzYGNNcVXIvUerGm223f_X3iFzCjXOhLxBAdjaJryUEjxJUFx0uLQ_jRsX_lT_kOKKC54q7L7QhrkSLR93zlLFukGn3Ph8bfIU0tv5C0RArRmXAceFcYs8A4sPa9W_A6LAEe5PYj3TLRJ3x70urw3Xj4IS5W3T9p1gD5Op2hIGDWWymEZKiuJBRn0yT-SFUOrhMOlCnEpybhnoNPQE81O5MH1qtjh2PqqiW3Eaf-A3tq3cF0LZ6Q9JLyZ6X-Yj6J-nzVktG0cfcNciiBwuuDsO8YcsOmnrYhKDa1m8DK-7iZbWBjdVDYEnxfJEMwE-U=w700-h245-no"
                }
              />
              <Typography gutterBottom>
                Double diploma, major in "Design & Technology", minor in
                "Thermal engineering". Certification in environmental economics
                and management.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/eHQOGyJpNC9F7ikX-2eqN5y1g3Zn3UKeci4CfwmfDaDwg1ER-_63J7GuQG1WBT6vRQFfERDWOJfMqP-6d-xNKAoCU9gSN-iDsbnPoSvJ255C5E8nIh8P1Fiv8bvT1nzrPB-AZDleyhBrnifwsCGl_UZriu6zQ-_dmm-xbhfZDcvULGdJ68XHIwA1unf6w57VCEsMGrhhuw-VRIekyP4aj-np761e-h7c0VigVPO1l7V3497xlp9uUbIMlY85sj4TzmY1FB5KWhwecM605xJQzgMWxtDorCC1ZL22lV_s8aSI5mp889VIyDck8XRZ8dHAPvM60TArKZY9Sjbqu2ycLl9gAnLZtMKONDHQyyi2uEae_5S-VhUOVDIwYF2ty4g3uo_Nu0WI9rQb1lPVWdQtmBEUH3fRKAGDVd7OvzrSmmop2ZcpmgbDoMrVlx3uNcXeGrvc2rF2MSFm4Ht_rJ1O7V2npvbHefbOeu4Kw6jAQHms-U4_9FWFbQxAas1ZVhDFCXAs9HjA-ewIup5udWjF-MbmioKy-iYqZ1YPHZYrN2llHumXdxJBiTconAR_yLcqKGzKxeqdvBv3CV53qpSOFaKD2YIXrLanl5hnulzekHz4ZAXnJpjRjDHhOrYuTYRw7SkWoHCGZ0PpmoAfaPO3D65F55-MbS9Vh8rkTrYipjOR_0AX7jaHcg=s296-no"
              }
              imagetitle="Ensam Logo"
              title="Double Degree - École Nationale Supérieure d'Arts et Métiers Paristech"
              company="Master's Degree in Engineering"
              date="2016 : Now"
              avatarlink={"https://artsetmetiers.fr/en"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/W6JYoi-L9MUm69fFlmazX6zYMkPoX_XY97WFMPiVJvX43qG5Oggzc_xDPTU8rXDdg1oaUyLHGIGOSL75DOcnCU7PPMT7Ytz4YyYsyy8p5U6nB4YsfQ7iy1-lV_4m6gakzlbsl1aU6VXkR66MGGsIRT4UExa2km3Vev2fa6Gy2_SXGGhSV9S5qcoD-4OKeWh8bPvfmDe-l0JUujqFjf3LIgBhZ2Q0pRUSetRalfiZQyGpJ6C-WMaEMvM__Me4cm4a_ogZ41-0FkxfuzXHEAjbd-qgYcprwBt8XBJZntcX8LeRbZnMN20o46uAjG3dfauwl0leR3HPKUJQz93dhjtop_NjPKh217za_xQ_wA3cPwKlmJFs7ob8krJho_LdPwYdZ_dswdG-yr_0mP9REV_SOAE4pkSNWn5Zdrh95ATc3_nsODNFhAu6GccPVqXoXHnDb8VNkE_gl2B84tfxaUtgxVUfv8xKEpFwUsXk8FJ1oADwOaS8809cSYoxZioRqFMAMmRoIcxSOJ07kgaJhcdNT6mwGcywM5Y1GlLYdqUDPQqRQvkdZpkGg_b_sPGiKYvABKL3vSIkr_xM5_7ZrBX2Hu-oLu6XmwXGT6yB32eBnNyywyRu4zNt40W007y3QmJlbfg0RVJFSqT_C309wEYFDQ8KGzePAl6zy-bV4GqGli0fwgc7uMjTMVVrbgemVaFfSWxuyZtQVGrct-faRjILxHa2iSGB7nWD1uIkao-E4TZMOXw=w920-h319-no"
                }
              />
              <Typography gutterBottom>
                President of the music band, I organized 7 gigs in two years.
              </Typography>
              <Typography gutterBottom>
                Communication manager for "Grandes UAI", a sports competition
                where 1000 students get together for 3 days to compete in
                different sports. Achieved a communication strategy that took
                place on social media, written and online press. Negotiated with
                8 sponsors and implemented tools for the team's communication
              </Typography>
              <Typography gutterBottom>
                Co-manager of the school's ski trip. 1400 students for 8 days,
                500.000€ of budget
              </Typography>
            </ListItemElement>
          </List>
        </Box>
      </div>
    );
	} else {
		return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 03 : À propos |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            Vous voulez en savoir plus sur mon parcours et mes études ? Vous
            trouverez ici tout ce que vous voudrez savoir à ce sujet.
          </Typography>
        </Box>
        <Box className={classes.workCardBox} align="left">
          <Typography className={classes.categoryTitle} variant="h4">
            Expériences Professionnelles
          </Typography>
          <List className={classes.root}>
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/_aiU0pvp9aAKQBWjOLWfEpxJiFZhnUc-TXZPBLGJuKTOkvppdT7NweMrtGfPQPq1iyytStQJxEirdUGUzJuJtIAbEkMKYdUoysbzgMuNCKGpCKfinKRdSFTDP-ioDentKu-2dTpZcmas9s8qSpy2C-KzLRE52V3Z-XdcVHCeODoXRrMhyOzTCAzvSzIy0Q_SQqqRgkpjloPVWg199ygtMgAY6tmWO9AAdRMA_5O4CI_eP5Ted4DGh-pq9gmC61tHljeEtPqQ79I5VQFZEEEv0KZkUt3PjfYc61_8dPLlmUKlTJh0sEEm6w1EIxQTCpz6cgIhx3g09Atv-C_dZntARzhBLvZvrf2Ita_yddAriUa_WAYcKBIANg0S4zdDYuU7wUu1nMaYWAH7RfAsUTY4SozFObN84k-vW9u-lzXGZSYMVp1ewo0qOL1lS3OrIyfgvisXrtgoBiftG4i4vBCDuB8M5NNTyvJT0FZZEj-vxItbgSnGFWd6KNHZLOlFEC5P3575LWsFRWwdXvj2Qk3R6RcKTNcpayKJWbH2rFMMVgeLTSg2gKRMGkzgMKBvBqDgQpcgb_3SPKcFH8250-mwgMXsTr_Qzp4XkYtHiRc1X7RsBApDOu8DhSjMG11aJjOt9UG9mFpCUh6JVA5HHEip3sXjZ7FPsOrvVbWq6QV2-wKHnmKnGOUhJihdcaO4PO516aPdz9TSLegiCYc5OXrRfmyq-Gl6FjYf2aMkqSnrp2Fzm6U=s400-no"
              }
              imagetitle="DT Logo"
              title="Stagiaire développement commercial"
              company="Design Terminal"
              date="Septembre 2019 : Maintenant"
              avatarlink={"http://designterminal.org/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/nL1WNNXXCjxZB68c4aS1YP9KNKupdxcE3TeEIPYc3sAkkr7Urd0RrEAAJl0azezncg_ewna7kRB-W2MHb_yoiCRw_TIMEgV8huOxveUTOMCBF4TEmoEM8bljjMvzsjWbSGDoY4hOBGeaau94_BqxADD1sCWRtQ5_ZoLkHCIJstNLJEeFwOI36HjDFtFVXrSAa830VCOxuFnQqQk69UkcF-iB7eDg0w70IfkYya_SWVQA9mabsCiWCeFAYhMMKzdDbPK0td_4CJ9HLJXeMQFWeGDaLY2_0Z8UUV6WO3whl0PlyIhUefdLzpo_xHxg8Dce2nA6-bDk0o5Eyghvb-2MgZeEKb6rA1VXELhxpTW-SOFmDDt0ELY_xgSlsOYc5OzTVcbvQ24eegHujFsmQ6SoBnt5U9kiDI6Uubv-nMnW4oNq3YqKAZXN49wHZsXNlGYySI1mt--uzrZv0bmLliVXg5unMjxpjjZkiw2lXWkjwMfrtebF4GvesprJdNaVlS-EE01Dx_x4CSy4Y1WZDGgPeWusH3IitczJzn-FoXvYMqzUYdsElgEXbY_AI5FlrlnqQgnB7y6LxXdHFYBrh4fEOE4a0Ac_QgHHui7JbJDXOrPP05TQl2jxVqM5ZXZ5W61FdLrpmCkBjD7IxwSoB1YtsEG6WKLGjXw-Qq67-4J9geaPZb1tD6ohsQ=w1187-h617-no"
                }
              />
              <Typography paragraph={true}>
                Design Terminal est la première agence d'innovation d'Europe
                centrale, qui forme des "champions de l'innovation" grâce à
                des partenariats avec des entreprises et à l'accélération de talents.
              </Typography>
              <Typography gutterBottom>
                Je travaille dans le département du développement commercial, et
                plus particulièrement sur l'expansion internationale.
              </Typography>
              <Typography gutterBottom>
                De part mes expériences passées, je suis en mesure d'appliquer
                beaucoup de mes compétences transversales, que ce soit mes
                connaissances du monde des startups ou mes capacités techniques,
                elles s'avèrent très utiles. À ce jour, j'ai:
              </Typography>
              <Typography gutterBottom>
                • Créé un outil pour automatiser la génération de propositions
                commerciales
              </Typography>
              <Typography gutterBottom>
                • Éffectué des analyses de marchés
              </Typography>
              <Typography gutterBottom>
                • Identifié des partenaires commerciaux potentiels
              </Typography>
              <Typography gutterBottom>
                • Analyse marketing sur les réseaux sociaux
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/MAOtf1C3oA0KwFj0SmYUZa58iXT9cUCUEVizCnm2wQ_f2sllyUKAN7GmEDxxCNBzXZ7A7hiQMuEhamAFBfVPoYzHX5SVPR1X2EJhe2SEsVtfMrm_dZqmfMKr4YUHvxS-0euGnIYDXqIJZtcwHWlMdyCCCKdN1XmkWCV_mwufKiJ4Ek2zWbqQ4j5S-XJtC8QZ3KWabUBKB_z6SV-28XN39QdHcdRp5Odcox7R7iNwRtRfEjDpE-mflMYN-WM5aOYPeFfF2DsV_w0PqFYRcdkF5Grkmv3adeG-qa8TlOX6rrH6NivukRnt5vLG9LgtviRQqcuxnvQuAudSVB-zDQH4CwXOISJ3p6TCs2cBEKlfcdmadi-RS7c_nQ0QCM_3ddcNtBMtE4jzXV2DndsVEIgKUb0MWuaW1B300n0xgQflVXfdP1FQgqnff2UWvd1keFic-vtWvaOYxYCjvSJeUiHNnsP7P5Z6J5-H_TYmn2EuM4kXVcRlqmnkZTtevhOA03mn9C6Y51PJPj-MgKP5n1PwP0mmiF6KvCZhADUym5rF040G4Z7KWG3MhoMe3wWSHLykClluHRpxb0LNpD-nvbRL1sPpB2BiZ6Fu0fpU8Rs4m_vmjluW_OzjfTHqCUq42hLUX-Vr_GNmJV8020cr2CC66tXxHVsd_8guzvQSQRDCNoH9gcrrZkA62F9UV9VCxMhAmokpmA10XpKfKFTm2_RbAwRbdNpul5vI6X3ddEpybWvpSvg=s150-no"
              }
              imagetitle="Leafee Logo"
              title="Co-Fondateur"
              company="Leafee"
              date="2018 : Maintenant"
              avatarlink={"http://www.leafeeapp.com/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/OvLTqXZ6gI4boRS7PgKnOuhxGiiqQLS41Q_dr5kMNDQz1SqJNaGrBo2LMxIfgtb_7_Q-SgCyDynvlg-iZczVFPIDRs179JTPxqjZj4XvP1OI6ti0UdLI6frXils2evT7k2tE6mkl3VIjAu2pnJuhNlkK4Sqade3UaEJdptI7xXTQeoKtP44qk4eSKQO53r7rx83U74cQHV--2Mmh1dS4Mcme8H_32iPv-mBaX-XzCjE5wbKqjeQK1m9zjZp-URDiDZn14f8E57LJVHQzyMTRsPqPNSeX0hpzpwXJC9rIEC94zNNurw4tuGvBMa2k_pwrum6x1O75o5V9IwrkY2Ue8H5CFbrfj9HT9H1dRaKgUheByZXqxRfYt45Tkc9_-LCDSNC8HmS54jt34-28HwrRMo6nsOOsPm6NQ0ZD9Lwqd5F_ODatNFVeyE4zPswxLvgn8as5JgF1UuDSq1fk82qqI5FjxHwEKvOo1Zt_NPVFHClBrvTAcF6KViI0A6RN8hNGbxE3-6MKN0H7z1nD43X9ltyOVyZr5A8LwiGEhbDIh4S6qM7HUX-lVB2bKSyNn585SLMjRKT0ZmFeo7mvzkQHYP_jcK1IwY80hspkBS39Dc5mmTzvh0tlyWo87prl29Mpwh59I_ndW3U438TaSCECBtvjyBadvfBo7edozpGJ7hRxvs71Zn7kJA=w633-h667-no"
                }
              />
              <Typography paragraph={true}>
                Leafee est une application de gestion des finances personnelles
                qui rassemble toutes vos données bancaires en un seul endroit et
                estime votre empreinte écologique. L'objectif est d'éduquer les
                gens sur la façon dont leurs finances jouent un rôle dans la
                crise climatique actuelle et de créer des incitations pour
                réduire leur impact.
              </Typography>
              <Typography gutterBottom>
                Je suis responsable du développement complet et de la conception
                de l'UI/UX (API côté serveur avec Node.js, Base de données avec
                MongoDB, et Front avec React.js)
              </Typography>
              <Typography gutterBottom>
                - A remporté le premier prix dans la catégorie "Smart Eco-Homes"
                et s'est classé 2e au classement général (19 équipes) au MKB
                FinTechlab Hackathon.
              </Typography>
              <Typography gutterBottom>
                - Compréhension accrue des business models, des stratégies et
                des études de marchés.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/jsUFrCJw0D9TuAqjnwQGdmT0cVMjPgQTTJqqQ6uJ1YUXwZ2PJJ-8xi0YRBzfIQ_BJzYUdfTaZVCAolZgAbUBi6GSR5eVpsEw10f622oV61KPgMUlw2-EAHVcz7Y6SzV6GbHdFmvQkvKrC3M125nYeFzFfjlPjFDFxdcqBnXsY31aIgwdKiMEjg6CbdS7S0NL9QhlTn7M_u0P_UMRWuAhsHgkfiHRlgWqD9NMx00BQb0lxBuB093MCPui75twgNzGt-xNpGHCFiJ3KXSWF8GoA38__LyL5sts66flESJaBi_LxWha5p9Tzqm8IBGdedFMsmZe3Ss1wwjvhhw5kkXcaSw6Wj-zk4dGM8fI7Of3dfr_E4VdIJSaowfx4wWg2u3JVFNUP_O5llsusGZJJCX_1skUuqUh_hVIfuv6kuxC_aviceZhWZvtseAZtgM9vov_U2Ab3DmLA0jBNIU41EyJQbuSbv5hTa2zdDGFa6ViFtLWt0GmGtGxcE33JqcJxdJXF99w4pUznC4j5J75NYRA2wWUDxdGwrS_y-ExSFcaI__rf4iBcAkG5AuMbGFYqhgR3HhWGYZd2w_QtzpDvOll_u6FRxHBFr-jY08jLuzUt0w6FJ2LcWJsSBFGTpXLKiw4H5NSoM21yaKxf070URZEnlkldA4FfoqoZF8CNO6PeaZVFXrxF4e2Vw=s318-no"
              }
              imagetitle="Indelec Logo"
              title="Mise en place de deux sites d'essais contre la foudre au Rwanda"
              company="Indelec"
              date="Juin : Août 2018"
              avatarlink={"https://indelec.com/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/1jIUtZhGs33Nt3pEr3w5mpWqdtyEk_Lsjbp6Imh7JQMnR5OmJ-tfOCOdfMt7r4ERLMVtbo7JqA5bnLx6BZAaG8SKko-HzLo0xLSTVnoDPdQFJsOUPhTuOBtOcxNZ5J-JwyQt55iwbXwVSEJwHNAeLaNntm-sJ5-Zc3wVZxHc8L4KqAopNdqw_p9gUqR4ogeqCfTLwtsYKpAelFhmBSG2PJ9Aop25j-oY9xGwV-u_hv4MzCeKYuLqEPYcPgovcpb-dkWnqspbjV5YIpe-HN3L_jXZyMQgq38ORn54fP4evXcz_SkzGg0ob9MAp09QjJ875wJG5Fi2At8x5p320zFABF8z5NXEHrFB6Ktt4NjQwg8D3b7VmicJ0CgU_QkMAP6qiQemqSUS8Dqo7egvUgse_5iyF_ZB646vL5n-_WawaCuRxSbPKs696XUS2OSXMNYqHVV-5nTOzJkRTDrGgtLOjKtKadUq_awMCniDaJonaO4LBYOWcY4KLoWsqRChYorRVzxtEzBbl0Zqem6Jo2922J8s_Q1tckmIMJM2N6uoIgCoah_wW9nIcAAXGpRC4suZQQvuJ7oGXbie2MqSAnv3enM5Iv2BzqdvCOoL4fy5tl7uYpnJ4AP5vCDwKslUkUWrWdereX1t1ViUG5Sy2fFN1QdhzElHoQJpXCBpKSh0X2lqEBZ7xOTlLA=w468-h260-no"
                }
              />
              <Typography gutterBottom>
                Pour une durée de 11 semaines, ma mission est d'installer et
                maintenir deux sites d'essais contre la foudre au Rwanda. Cela
                implique la vérification et la maintenance d'équipement présents
                (paratonnerres, parafoudres et systèmes de communication) et
                d'installer de nouveaux équipements tel qu'un détecteur d'orage.
              </Typography>
              <Typography gutterBottom>
                Pour ce faire, la mission se scinde en 3 parties, la première
                dite de formation théorique (niveau N1 de la certification
                Qualifoudre) mais aussi pratique en rapport avec les
                technologies INDELEC d'un mois environ. Une deuxième partie qui
                correspond au voyage lui même d'une quinzaine de jours, il a une
                dimension technique certaine mais aussi sociale, en effet, des
                rendez vous avec les autorités locales aux sites d'essais et
                avec le ministère sont organisées. Enfin la dernière partie,
                d'un mois également, sera consacrée au traitement des données
                relevées, à l'élaboration de statistique et à la rédaction d'un
                rapport de la mission en français et en anglais.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/jom-9ip11dRHe7C1gWm38IMmJQs43oJBdTKJDF0yy87zJYb3J0gNRaJn6mBKusRSKDkJbWGTjHCKG56R9QGwNyMI3IihefQwYxGh5mKOpD_se-wqVnr3WoLJcQEa-uVOzCoxPKfdnAH6RF4-glr2-TrCfQkSX7m0ggDP3a9VLq46P54qER9RiX1Fpjc6prhj9VAnnHb8OPLWcPZ3xWjopCes3vlRlgrp4v6UxBjzWQct1IICv-wg34GAZvo8MpuIodojLpw3A_mayrRdqLjR8_VFQJ32Y-dQb7pll55HUu4VJA6GkxyA51cj1XTTLs7siIX8QN5PF3uGu9wCRBIrV1PyiK2k0Cz-AWKXuY2JxSsxjNku8yKRa1o7oCscgtAelm7C59YIz5ebYpouKjkvs3HS4XaCP2l2M_a-sDnJZ4DTCC_NpU5R6-PVMrZLyFUbVsjcaxrIOQ50sbKe2mMAla6DFZQT24n2pIsjlBtIA7PNNI8eB1ykMDIqgWE9afexPkMero0eJgfyGBR7P7aq7S3fOpMKm5M2HccI2hXkUF1lTRFfaYAYTzIKybdVB39OlmeOg7C_bw1LQ_V4pB2hh6-2Aj52cErNHoOURMchuCjfqUlYPGwLB87gy4qw3uli1j7kmMncrsmrykD2S4ALqMJKpanfLopSIRGKtZkgpBEkjpCRPoY4RQ=s250-no"
              }
              imagetitle="Colas Logo"
              title="Déploiement d'un outil de GMAO dans 30 centrales d'enrobé"
              company="Colas"
              date="Juin : Août 2017"
              avatarlink={"https://www.colas.com/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/he4L-29dAab3KbM9tQ8kmrYXqwYE2-nWDg8bfjhYS77ohE46vC_npbsinFe2KEEnyNmIV4tkNnpV9Hp8tkJDlzDuQvceXwSP5P4NCi0ICu2Fy9A-9WG5JmyIK9fQadUJS27b13cQB_9yNV-H-NzQVRwHQ3XZfjWpgVIL01x5OX46oG87mafDhSAbKi1YNJJJbiiYcEudSrV0cZg4oM8Fbs-oNx66S709jxzO5kQ2btsOd38f9nDecmV1s6UeyX_1SPW4WicCuPE8q0QE_JnQCi2cTzVO1V7GsToE3XBg0jHEvMHL8J89yjsu6_gcxriZozKwuI8_GoafMx2ROwAcgqL8YAEkVazzDfy3bSHtSU3kKfmAt5yGAkABPYa_brcUrHcCfkMfKgf9_LrgaFoCCOOUBxvrLGzSzNE2wqyThuPsIGs_UFgI0YEg9F_gs3pTQIQ5dZf18_uO6FwscTYGKUwfoJnay5SMQRM38MR22HOyJ1zfxxe8-bs_0Qm70xVl0FB2Tu-FmasBPO1DEXwn-ikZLEKE6XaHDRhihw-btpXhsyqlo7iyLfzT8Ato5K-9z3YizuJxSvZtm8qJMsuhgGMRMXfWypGHk-dBuqHtZ75FjbaDZcjZc3iunhk5Rls58iB9kGnMs6_I0Mstqn_JvQMm60oVeyYoLlBkSV_iggpoBkOlCinLxRq2FDXhPkOoqCcoBP2g3L_hrnRim-s1cmM0eVhcc1DFWMEvox4mqOxjhyw=w555-h383-no"
                }
              />
              <Typography gutterBottom>
                Pour une durée de 10 semaines, ma mission était de déployer un
                logiciel d’aide et de suivi de maintenance dans 30 postes
                d’enrobage de la région Nord-Est. En totale autonomie, j’ai moi
                même organisé mon emploi du temps pour pouvoir accomplir la
                totalité de ma mission dans les temps impartis.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/Q23jvYCxZfiLevOSHQkPk9H_5BT_FicABjZbqfVIOqw6KqbREQfgc_ab6hQmEWDwv4EV2MCbDCyG0PUChLrS67V-kbqqObCr48JLDpB9twMgs-jb_UHTsIMoK30Wo_4Cf9HU7C7zYpNwqiC7G4v7TbPio0RcCpQqsjILEv_zbbRix6rog-1STS5wqb3yQkVr3-yK59xGYC8i5C_q_8ofNPd345WODXH2D-kllTnC-UvSytXf6DVrUi2WpBGliZkcoQYJoo5PeGl48_ftFxNF5tQCTt7KQiNedBPySDRwHJUqvKDeE8y_RCq3VeNwXWcL63yFcNHRO0qEhaXYIXPJn3bNjqJbZNW02qNYw0qTPFZ_TpUnyLLA8XwEHxP8F6YqDyKMN4-L8dpupOEIbEHLt2LgIjpEUUj0w-_4tg_xsMbHZwXz0AuV_v7CG4n5bBjj48NLc18z0rB02ptu0M1rjlXayMzlHikpW6c_snwoGtHM22kr8U5rJpMBQqpxvGxBQ30rwWFX1vWOC6XHQ66yNn8VkajyfqRpwJTPkhwlsw5cIOMSvgOPENWF39fj0TTXphv1M_ZwR_l9Jeig4yFUeIXpe9LMOzGPJklZpfWs6JZHEC3M4m8YJl1tFlyF-1Dft4Kv4ITfOu2WvpBfr8ilX5LL0TdFqchz7aOFrE4XOvYSY2A-qfh5kg=s400-no"
              }
              imagetitle="Lovelace Logo"
              title="Stagiaire au service maintenance et administratif"
              company="Lovelace Health System"
              date="Février 2017"
              avatarlink={"http://lovelace.com/"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/l5t4ZvfvyagTHEPFw3YmgT4gzCPmCTH7SdgscDRAcxNbKAOiz1HvJs7IMHLdtLYInK6cC2FtqmKGDjlP1t5-HGiI_0ieM8TP2695o6yZnWRhE16b6_iLqeCY4qD_DqtI0rnDB_N2yV_L2b-Xzt8e_9bZh5u4BmmSB5SmO1VqB4B3--gUqZIbK3WDBrBea4GUEUK6jop_0JTax9KrbBHfhQx50h34ANuG1-4KJZ939rUI0EyrpVc-xdL3ywAy1PXWIbc0EpqpMz9TwC6ukqVD-AfrBqkboe0FIwTDmax9gEQKq9Vdt5UtvEpmLPv6wjVJLYDcBISlP-lv0az2cVOsRjnJ7hW4wqmVLMi6Ryzm-p9hfu3RDlODE3uksUadN7YbeNprjIGfAYWBlxUTV3v1oT_Ykbz5vSXh_OtaLhr8lNekYxUuefYYmnKq8_j97Ol8LO_SUiKDby1Uz8XvBcqfo8_SdKShdvRqH1qb3E7Hr2T8akRbANLy6_GyLLWcf8Q7xmQ3wNmpmxaPnbE3uvIlIOwmwMlRkeFYZVpa9_uutwaY-FQM91YB9CV08thbvsANjrM2dh8-9WjpojcefNXUoaKu0FpMSv-5MG0AJU0fEPhEKHzzRwKxAgxM64KdIKmV0XUHboGxQGZfr0mT0MdS2uyKAaC3X34CrjN9-qqBrW1QoluAGRL7URmmwkRBJ0yDjAM-d0AtFpYV-4mwqfO6aokErp-GzR-bwJPQXTrQ4omMh7k=w920-h436-no"
                }
              />
              <Typography gutterBottom>
                Stagiaire en maintenance 4 jours sur 5 travaillant sur les
                projets en cours et en tant que stagiaire administratif le
                dernier jour, assistant et apprenant du COO.
              </Typography>
            </ListItemElement>
          </List>
          <Typography
            className={`${classes.categoryTitle} ${classes.lastcategoryTitle}`}
            variant="h4"
          >
            Éducation
          </Typography>
          <List className={classes.root}>
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/X5pPJiGOz6U8RwPFwdIa9woVSix3pzTzA5d9v686o4TnNVhjuM_fuLtl1xExJRekZ66PGJkrlJ9r5VzS-GqZ9_scplp1tIsAwEs_340kEWb6ChyANCbFf5cBwwGvDKbPkC7AJcYLXuFj3SMA5oxgBmAP5JeC2g309qgoJWfqikxR8vn-ctgxlccU8_lvHdsLwawYm4N2bxjIXstV5RgbHmNCbFIySOwmcgttuLYAu-8RmCc7bLGW-4l22K0f2BTlAxHJqjD3Dw5i62R7UM9bOGAYxbQ0lJYls_R-WzjD50rPvVnZM7KLT34VLjpwdpAp62TE36FU_igh4goqtXiju6Zm0RZSbzdeeEJrF-QkOSSJ5JriQzPh_Ti4LwAuARyZPei2JnOpA9LMfmcf_quWm9BSfRq_xhokaK8DHcCqQXb1pncSW4xARJ2gADHrk82awXslcLTRvauqfdm8NBJibVv8Cc1gNYKXfrpTn9wcCpXMMm4xP41-WewCBaJH1z10plMaE5KOCMLQuw_TvtueHfn0FdXK8YYPKEnELMRsjUvUSJ47159AK2_CwjMT0SmsLUNCgbYTpWF6CAB5BcRiAbriT_TAG2sXbwqIobxLrnLsXsrov7mDGGoimwiYYtfJN20-dFRnC7nqImDmIE5li3TyHK0NeRUq-Be6KvpvaJlipdX7gt5euA=w350-h250-no"
              }
              imagetitle="BME Logo"
              title="Double Diplôme - Budapest University of Technology and Economics"
              company="Master en ingénierie"
              date="2018 : Févreier 2020"
              avatarlink={"https://www.bme.hu/?language=en"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/0a-sP-eKmp0rd2Pg6j21UTAKfv_ESGzYzHkkEeq4M6VuwiVVTDbepHXSTQz8Hz3SN3LHHwMp5N_heLjfgkRH_-fxrnI8GeIVT9s81q_EXsdluXKnj9GpTBH1BOet2r5zsfIInxwybPgHBZ5U7YEonOAE6voI64uOZhGa4x4DvygJIn3Nl_YZno2MEIEKYQsY7kJ0HLnLway8XFXhC8hW8AkUoXlWgk9pnqa49vus8ApslId-IY1YKQo3uwSxS19FbNcM2d9vpsTRy74Bjek2sawIRr-YPlVAP3WTSkpML479vCCnN21Pio_3LGmundUlxfuPks_7wmTRcZhDrgjxC553KhQdHB4Lc-usPaHUoCeTlvZZoVpvpDrmY-XfvOEqNDim_7rtKBs-vHvBxYqA8ycmeMhd5Oa1KDN6woBBZt_rGZOnTzYGNNcVXIvUerGm223f_X3iFzCjXOhLxBAdjaJryUEjxJUFx0uLQ_jRsX_lT_kOKKC54q7L7QhrkSLR93zlLFukGn3Ph8bfIU0tv5C0RArRmXAceFcYs8A4sPa9W_A6LAEe5PYj3TLRJ3x70urw3Xj4IS5W3T9p1gD5Op2hIGDWWymEZKiuJBRn0yT-SFUOrhMOlCnEpybhnoNPQE81O5MH1qtjh2PqqiW3Eaf-A3tq3cF0LZ6Q9JLyZ6X-Yj6J-nzVktG0cfcNciiBwuuDsO8YcsOmnrYhKDa1m8DK-7iZbWBjdVDYEnxfJEMwE-U=w700-h245-no"
                }
              />
              <Typography gutterBottom>
                Double diplôme, majeur en "Design & Technology", mineur en
                "Thermal engineering". Certification en management et économie
                environementale.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={
                "https://lh3.googleusercontent.com/eHQOGyJpNC9F7ikX-2eqN5y1g3Zn3UKeci4CfwmfDaDwg1ER-_63J7GuQG1WBT6vRQFfERDWOJfMqP-6d-xNKAoCU9gSN-iDsbnPoSvJ255C5E8nIh8P1Fiv8bvT1nzrPB-AZDleyhBrnifwsCGl_UZriu6zQ-_dmm-xbhfZDcvULGdJ68XHIwA1unf6w57VCEsMGrhhuw-VRIekyP4aj-np761e-h7c0VigVPO1l7V3497xlp9uUbIMlY85sj4TzmY1FB5KWhwecM605xJQzgMWxtDorCC1ZL22lV_s8aSI5mp889VIyDck8XRZ8dHAPvM60TArKZY9Sjbqu2ycLl9gAnLZtMKONDHQyyi2uEae_5S-VhUOVDIwYF2ty4g3uo_Nu0WI9rQb1lPVWdQtmBEUH3fRKAGDVd7OvzrSmmop2ZcpmgbDoMrVlx3uNcXeGrvc2rF2MSFm4Ht_rJ1O7V2npvbHefbOeu4Kw6jAQHms-U4_9FWFbQxAas1ZVhDFCXAs9HjA-ewIup5udWjF-MbmioKy-iYqZ1YPHZYrN2llHumXdxJBiTconAR_yLcqKGzKxeqdvBv3CV53qpSOFaKD2YIXrLanl5hnulzekHz4ZAXnJpjRjDHhOrYuTYRw7SkWoHCGZ0PpmoAfaPO3D65F55-MbS9Vh8rkTrYipjOR_0AX7jaHcg=s296-no"
              }
              imagetitle="Ensam Logo"
              title="Double Diplôme - École Nationale Supérieure d'Arts et Métiers Paristech"
              company="Diplôme d'ingénieur généraliste"
              date="2016 : Février 2020"
              avatarlink={"https://artsetmetiers.fr/en"}
            >
              <ImageBox
                imageBox={
                  "https://lh3.googleusercontent.com/W6JYoi-L9MUm69fFlmazX6zYMkPoX_XY97WFMPiVJvX43qG5Oggzc_xDPTU8rXDdg1oaUyLHGIGOSL75DOcnCU7PPMT7Ytz4YyYsyy8p5U6nB4YsfQ7iy1-lV_4m6gakzlbsl1aU6VXkR66MGGsIRT4UExa2km3Vev2fa6Gy2_SXGGhSV9S5qcoD-4OKeWh8bPvfmDe-l0JUujqFjf3LIgBhZ2Q0pRUSetRalfiZQyGpJ6C-WMaEMvM__Me4cm4a_ogZ41-0FkxfuzXHEAjbd-qgYcprwBt8XBJZntcX8LeRbZnMN20o46uAjG3dfauwl0leR3HPKUJQz93dhjtop_NjPKh217za_xQ_wA3cPwKlmJFs7ob8krJho_LdPwYdZ_dswdG-yr_0mP9REV_SOAE4pkSNWn5Zdrh95ATc3_nsODNFhAu6GccPVqXoXHnDb8VNkE_gl2B84tfxaUtgxVUfv8xKEpFwUsXk8FJ1oADwOaS8809cSYoxZioRqFMAMmRoIcxSOJ07kgaJhcdNT6mwGcywM5Y1GlLYdqUDPQqRQvkdZpkGg_b_sPGiKYvABKL3vSIkr_xM5_7ZrBX2Hu-oLu6XmwXGT6yB32eBnNyywyRu4zNt40W007y3QmJlbfg0RVJFSqT_C309wEYFDQ8KGzePAl6zy-bV4GqGli0fwgc7uMjTMVVrbgemVaFfSWxuyZtQVGrct-faRjILxHa2iSGB7nWD1uIkao-E4TZMOXw=w920-h319-no"
                }
              />
              <Typography gutterBottom>
                President du club de musique, j'ai organisé 7 concerts et géré
                l'organisation du club toute l'année.
              </Typography>
              <Typography gutterBottom>
                Responsable de la communication pour les "Grandes UAI", une
                compétition sportive où 1000 étudiants se réunissent pendant 3
                jours pour concourir dans différents sports. Réalisation d'une
                stratégie de communication sur les médias sociaux, la presse
                écrite et la presse en ligne. Négociation avec 8 sponsors et
                mise en place d'outils pour la communication de l'équipe
              </Typography>
              <Typography gutterBottom>
                Organisateur du séjour au ski de l'école, SKZ, qui réunit 1400
                étudiants pour un budget de 500,000€. En charge du graphisme et
                des goodies.
              </Typography>
            </ListItemElement>
          </List>
        </Box>
      </div>
    );
	}
}
