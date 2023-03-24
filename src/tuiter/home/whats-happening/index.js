import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createTuitThunk} from "../../services/tuits-thunks";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  

  const tuitClickHandler = () => {
    
    const newTuit ={
      tuit : whatsHappening,
    }
    dispatch(createTuitThunk(newTuit));
  }

  return (
      <div className="row">
        <div className="col-auto">
          <img alt = "" src="data:image/jpeg;base64,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"
        width={60}/>
        </div>
        <div className="col-10">
          <textarea value={whatsHappening} placeholder="What's happening?"
                  className="form-control border-0"
                  onChange={(event) => setWhatsHappening(event.target.value)}>
          </textarea>
          <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={tuitClickHandler}>
              Tuit
            </button>
            <div className="text-primary fs-2">
              <i className="bi bi-card-image me-3"></i>
              <i className="bi bi-filetype-gif me-3"></i>
              <i className="bi bi-bar-chart me-3"></i>
              <i className="bi bi-emoji-smile me-3"></i>
              <i className="bi bi-geo-alt"></i>
            </div>
          </div>
        </div>
        <div className="col-12"><hr/></div>
      </div>
    );
  }
export default WhatsHappening;