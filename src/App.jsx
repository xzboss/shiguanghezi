import { useState } from 'react'
import './App.css';

const levelSenior = {
  title: '高级版',
  for: '独立摄影',
  privileges: ['标题1', '标题2', '标题3', '标题4', '标题10']
}
const levelCustomize = {
  title: '定制版',
  for: '小型工作室',
  privileges: ['标题1', '标题2', '标题3', '标题4', '标题5', '标题6', '标题7', '标题8', '标题9', '标题10']
}
let count = 1
const privileges = new Array(10).fill().map(() => ({
  title: `标题${count}`,
  icon: '',
  content: `标题${count++}的内容AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`
}))
function App () {
  const [curLevel, setCurLevel] = useState(levelSenior)
  const [isOpen, setIsOpen] = useState(false)
  const [curItem, setCurItem] = useState({})

  function openDialog (item) {
    if (!curLevel.privileges.includes(item.title)) {
      return
    }
    if (isOpen) return
    setCurItem(item)
    setIsOpen(true)
  }
  return (
    <div className="App">
      <div className={"pop" + (isOpen ? "" : " pop-display-none")}>
        <div className="content">
          <div className="pop-title">{curLevel.title}-{curItem.title}</div>
          <div className="content-text">{curItem.content}</div>
          <div className="btn-close" onClick={() => setIsOpen(false)}>X</div>
        </div>
      </div>
      <div className="container">
        <div className="header">
          <img src="./assets/back.png" alt="back" />
          <span>VIP中心</span>
          <img src="./assets/customer.png" alt="customer" />
        </div>
        <div className="main">
          <div className="nav-container">
            <div className={"nav-item" + (curLevel.title === levelSenior.title ? " nav-active" : '')} onClick={() => { setCurLevel(levelSenior) }}>
              <span>{levelSenior.title}</span>
              <span>适合{levelSenior.for}</span>
            </div>
            <div className={"nav-item" + (curLevel.title === levelCustomize.title ? " nav-active" : '')} onClick={() => { setCurLevel(levelCustomize) }}>
              <span>{levelCustomize.title}</span>
              <span>适合{levelCustomize.for}</span>
            </div>
          </div>
          <div className="privilege-container">
            <div className="privilege-title">
              <div className="privilege-type">{curLevel.title}</div>
              <div className="privilege-desc">（适合<span>{curLevel.for}</span>）</div>
            </div>
            <div className="privilege-item-wrapper">
              {privileges.map((item) => {
                return (
                  <div key={item.title} className={"privilege-item" + (curLevel.privileges.includes(item.title) ? "" : " none")} onClick={() => openDialog(item)}>
                    <div className="img">
                      <img src="./assets/A.png" alt="A" />
                    </div>
                    <div className="privilege-item-title">{item.title}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
