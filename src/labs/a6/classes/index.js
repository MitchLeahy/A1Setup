import './index.css';

import PreJson from '../../../compenents/PreJson';

function Classes() {
    const color = 'green';
    const dangerous = false;
    const sampleJson = {
      a:1,
      b:2,
      c:3
    }

    return (
      <div>
        <h2>Classes</h2>
        <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                      wd-fg-black wd-padding-10px`}>
          Dangerous background</div>

          <PreJson json ={sampleJson}/>
        </div>
        )

          }
export default Classes;

