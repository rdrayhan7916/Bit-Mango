import React from 'react';
import './Global.css'
import { Link } from 'react-router-dom';
import GImg from '../../../img/스크린샷-2022-04-21-오전-9.54.54-1536x1275.png'
import { Container } from 'react-bootstrap';
const Global = () => {
    return (
        <div>
            <h1 className='f-text'>Want Your Game to Go Global?</h1>
            <Container>
                <div className='row global-row'>
                    <div className='col'>
                        <img
                            src={GImg}
                            alt=""
                            className='gImg'

                        />
                    </div>
                    <div className='col'>
                        <h5>
                            비트망고는 현재 글로벌 1억 7,000만 이상의 유저가 다운로드한 Roll the Ball을 비롯하여 북미 국가에서 퍼즐게임 상위 랭크 중인 Block! Hexa Puzzle 등 50여종의 게임을 퍼블리싱한 노하우를 가지고 있어요.</h5>
                        <h5 className='mt-5'>특히, 낱말 게임인 Word cookies 는 Apple’s most popular games and apps of 2017에 선정되어 회사를 대표하는 게임으로 자리잡고 전세계 유저들의 사랑을 받고 있어요!</h5>
                        <h5 className='mt-5'>비트망고와 함께 퍼즐 게임 1위라는 멋진 성과를 만들어갈 게임 개발 스튜디오를 찾고 있습니다. 아래 버튼을 통해 프로세스를 확인하고 게임을 제출해주세요!</h5>
                        <button className='submit'><Link className='link-jobs-btn' to='/publishing'>SUBMIT YOUR GAME</Link></button>
                    </div>
                </div>
            </Container>
            <hr className='mx-auto gr' />
        </div>
    );
};

export default Global;