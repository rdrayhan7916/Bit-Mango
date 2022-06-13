import React from 'react';
import './Positions.css'
import { Container } from 'react-bootstrap';
import pimg1 from '../../../img/qa-pnptv6xbgueykd349xlapxswhxztvz27qlgpw1jy7c.png'
import pimg2 from '../../../img/developer-pnptym26c53ita49awtfakqabf4wwbn1vixbrahdk8.png'
import pimg3 from '../../../img/video-marketing-pnpu27rwja13bgvu9gvxunzwaldkejy0dcybzh51pk.png'
import pimg4 from '../../../img/artist-pnpu2pmu54pjg25wd6luo1hnkwxjgswwrtck3qekfc.png'
import pimg5 from '../../../img/market-research-pnpu3mj6sbykqeu412tslb6sdefdy7jikc6jwf1sdk.png'
const Positions = () => {
    return (
        <div>
            <h1 className='f-text'>Open Positions</h1>

            <Container>
                <div className='row'>
                    <div className='col'>
                        <img
                            src={pimg1}
                            alt=""
                        />
                        <h6>QA Specialist <br />
                            QA Partner</h6>
                    </div>
                    <div className='col'>
                        <img
                            src={pimg2}
                            alt=""
                        />
                        <h6>Platform Programmer</h6>
                    </div>
                    <div className='col'>
                        <img
                            src={pimg3}
                            alt=""
                        />
                        <h6 >Creative Specialist <br />
                            Video Creative Partner</h6>
                    </div>
                    <div className='col'>
                        <img
                            src={pimg4}
                            alt=""
                        />
                        <h6>Image Creative Partner</h6>
                    </div>
                    <div className='col'>
                        <img
                            src={pimg5}
                            alt=""
                        />
                        <h6>IAA Specialist</h6>
                    </div>
                </div>
            </Container>
            <button className='btn-job'>VIEW JOBS LISTINGS</button>


        </div>
    );
};

export default Positions;