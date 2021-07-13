import classes from './Profile.module.css';
import MyPosts from './myPost/MyPosts';
import News from "./news/News";
function Profile() {
    return(
        <main>
            <ProfileInfo/>
            <div><img src={'https://lh3.googleusercontent.com/RzZAFTxE2yIirK3UW4b-W2t0WMqO90fT58iRWElv18_nG86m58vzTUw_J8TcwCRhQV4fu4NkE9CDK9e9xxoiahxxlX3NJ-UAcMWOB6_m-Rc7DQcJSP9LbNd0osvURWZpXmQVCqoEPxMp6c6B4lDrBjXEVlqOgmS4Pmqf_0udKcnDu0FsCd2tyQGiR5V_Gs37sh5xio_7FSd_oYA_tI-stFVl-QpxF9VC4UEvo0gVb9y-31xbOkWV9cUhrqbe_pCpNgnfZXMf-w8igmTits_ACCokwaK36n6FkE-PGajQy51hr1Dskoravh7OEV-De42iRzUbgjjBlQv4k-2_d_g-ZwOq8YitweiCDieTTCXqKuDSydHKqIUKbivkZ81clu8IWPtHaZHWaYJu6QCBhLPFLrShXdaCOXi0xnOf_-XJZcCYcUso2Nl7qiS1F97Xl0-orn7iAkDMtWK0bSjyHSyb_x6p3LIeivXJJ_zCypQiHyQW_NZfiEIFcEW5KyvS76L-qmk7e1U0QlNbAH7wws1tNB4-M_NnLKuakz6wfZF8MzqTO3hoydalg8H5gXy-3bcnTWH44GCXOkBGq9zwvt9AArwX4apIgcum4etI5krIOMT0wd1bhfxN00nYNhkSvtYA3mv_4G_7li_oCGeBRTCa-8YP6_c87jOodcIEtn4Uf_vCTi4XchV_f17xNLuUDPlQmfp8o25lRwrctgH_hCNkcjio=w537-h458-no?authuser=0'}/>
                ava + description</div>
                    <MyPosts/>
                          <News/>
        </main>
    )
}
export default Profile;