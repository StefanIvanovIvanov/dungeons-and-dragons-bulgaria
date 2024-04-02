import Home from './components/pages/home/Home';
import Classes from './components/pages/classes/Classes';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'; 
import Races from './components/pages/races/Races';

function App() {

  return (
    <div className="App">
        <>
            <html lang="en">
            <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="description" content="The Bulgarian site for Dungeons & Dragons" />
                    <meta name="author" content="Stefan Ivanov" />
                    <title>D&D-Bulgaria</title>
                    <link href="styles/styles.css" rel="stylesheet" />
                </head>
                <body>
                <div className={`d-flex`} id="wrapper">
                        <div id="page-content-wrapper">
                            {/* <TopNavigation toggleSidebar={toggleSidebar} isToggleButtonVisible={false}/>      */}
            <Router>
            <Routes >
                <Route path="/" element={<Home/>} />
                {/* <Route path="/introduction" element={<Introduction/>} />
                <Route path="/build-a-character" element={<BuildACharacter/>} /> */}
                <Route path="/races" element={<Races/>} />
                <Route path="/classes" element={<Classes/>} />
                {/* <Route path="/learn-to-play" element={<LearnToPlay/>} />
                <Route path="/items" element={<Items/>} />
                <Route path="/spells" element={<Spells/>} /> */}
            </Routes >
          </Router>
                        </div>
                    </div>
                </body>
            </html>
        </>
    </div>
  );
}

export default App;
