import React, {useState} from 'react'
import ReactVidioPlayer from './ReactVidioPlayer'
import img from "../img/img.jpeg"
import closeImg from "../img/close.png"
import zoomImage from "../img/zoom.png"
import vid1 from "../videos/test.avi"
import vid2 from "../videos/test2.mp4"

const Voit = () => {
  const [modals, setModals] = useState(new Array(20).fill(false));
  const [videoPaths] = useState([vid1, vid2]); 

  const toggleModal = (index) => {
    const newModals = [...modals];
    newModals[index] = !newModals[index];
    setModals(newModals);
  };
  
  return (
    <div className="programs-block">
          {[...Array(2)].map((_, index) => (
              <div key={index} className='programs-block-item'>
                <div className='programs-block-item-block'>
                  <button className='openPopUp' onClick={() => toggleModal(index)} alt="Image" >
                    <img src={zoomImage} />
                  </button>
                  <div  className='imageBlock'>
                      <img src={img}/>  
                      <div className='imageBlockVoitBlock'>
                          <div class="container">
                              <ul>
                                  <li>
                                    <input type="radio" id="f-option" name="selector"/>
                                    <label for="f-option">School N1</label>
                                    <div class="check"></div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className='voitBlock'>
                      <div className='voitBlockResutDuring'>
                          <div className='voitBlockResutDuringAll'>
                            <div></div>
                          </div>
                      </div>
                      <div className='voitBlockTotalResult'>
                          <p>85%</p>
                      </div>
                  </div>  
                  {modals[index] && (
                    <div className='item-modal'>
                      <div className='overlay'></div>
                      <div className='item-modal-content'>
                        <button onClick={() => toggleModal(index)} className='close-btn'>
                          <img src={closeImg} />
                        </button>
                        <ReactVidioPlayer videoPath={videoPaths[index % videoPaths.length]} />
                      </div>
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
  )
}

export default Voit
