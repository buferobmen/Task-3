import React, { useState } from 'react';
import './App.css';

const palettes = [
  {
  "paletteName": "Material UI Colors",
  "id": "material-ui-colors",
  "emoji": "🎨",
  "colors": [
    {
      "color": "#F44336"
    },
    {
      "color": "#E91E63"
    },
    {
      "color": "#9C27B0"
    },
    {
      "color": "#673AB7"
    },
    {
      "color": "#3F51B5"
    },
    {
      "color": "#2196F3"
    },
    {
      "color": "#03A9F4"
    },
    {
      "color": "#00BCD4"
    },
    {
      "color": "#009688"
    },
    {
      "color": "#4CAF50"
    },
    {
      "color": "#8BC34A"
    },
    {
      "color": "#CDDC39"
    },
    {
      "color": "#FFEB3B"
    },
    {
      "color": "#FFC107"
    },
    {
      "color": "#FF9800"
    },
    {
      "color": "#FF5722"
    },
    {
      "color": "#795548"
    },
    {
      "color": "#9E9E9E"
    },
    {
      "color": "#607D8B"
    }
  ]
},

{
  "paletteName": "Flat UI Colors v1",
  "id": "flat-ui-colors-v1",
  "emoji": "🤙",
  "colors": [
    {
      "color": "#1abc9c"
    },
    {
      "color": "#2ecc71"
    },
    {
      "color": "#3498db"
    },
    {
      "color": "#9b59b6"
    },
    {
      "color": "#34495e"
    },
    {
      "color": "#16a085"
    },
    {
      "color": "#27ae60"
    },
    {
      "color": "#2980b9"
    },
    {
      "color": "#8e44ad"
    },
    {
      "color": "#2c3e50"
    },
    {
      "color": "#f1c40f"
    },
    {
      "color": "#e67e22"
    },
    {
      "color": "#e74c3c"
    },
    {
      "color": "#ecf0f1"
    },
    {
      "color": "#95a5a6"
    },
    {
      "color": "#f39c12"
    },
    {
      "color": "#d35400"
    },
    {
      "color": "#c0392b"
    },
    {
      "color": "#bdc3c7"
    },
    {
      "color": "#7f8c8d"
    }
  ]
},

{
  "paletteName": "Flat UI Colors Dutch",
  "id": "flat-ui-colors-dutch",
  "emoji": "😎",
  "colors": [
    {
      "color": "#FFC312"
    },
    {
      "color": "#C4E538"
    },
    {
      "color": "#12CBC4"
    },
    {
      "color": "#FDA7DF"
    },
    {
      "color": "#ED4C67"
    },
    {
      "color": "#F79F1F"
    },
    {
      "color": "#A3CB38"
    },
    {
      "color": "#1289A7"
    },
    {
      "color": "#D980FA"
    },
    {
      "color": "#B53471"
    },
    {
      "color": "#EE5A24"
    },
    {
      "color": "#009432"
    },
    {
      "color": "#0652DD"
    },
    {
      "color": "#9980FA"
    },
    {
      "color": "#833471"
    },
    {
      "color": "#EA2027"
    },
    {
      "color": "#006266"
    },
    {
      "color": "#1B1464"
    },
    {
      "color": "#5758BB"
    },
    {
      "color": "#6F1E51"
    }
  ]
}
,
{
  "paletteName": "Flat UI Colors American",
  "id": "flat-ui-colors-american",
  "emoji": "🤔",
  "colors": [
    {
      "color": "#55efc4"
    },
    {
      "color": "#81ecec"
    },
    {
      "color": "#74b9ff"
    },
    {
      "color": "#a29bfe"
    },
    {
      "color": "#dfe6e9"
    },
    {
      "color": "#00b894"
    },
    {
      "color": "#00cec9"
    },
    {
      "color": "#0984e3"
    },
    {
      "color": "#6c5ce7"
    },
    {
      "color": "#b2bec3"
    },
    {
      "color": "#ffeaa7"
    },
    {
      "color": "#fab1a0"
    },
    {
      "color": "#ff7675"
    },
    {
      "color": "#fd79a8"
    },
    {
      "color": "#636e72"
    },
    {
      "color": "#fdcb6e"
    },
    {
      "color": "#e17055"
    },
    {
      "color": "#d63031"
    },
    {
      "color": "#e84393"
    },
    {
      "color": "#2d3436"
    }
  ]
},

{
  "paletteName": "Flat UI Colors Aussie",
  "id": "flat-ui-colors-aussie",
  "emoji": "😍",
  "colors": [
    {
      "color": "#f6e58d"
    },
    {
      "color": "#ffbe76"
    },
    {
      "color": "#ff7979"
    },
    {
      "color": "#badc58"
    },
    {
      "color": "#dff9fb"
    },
    {
      "color": "#f9ca24"
    },
    {
      "color": "#f0932b"
    },
    {
      "color": "#eb4d4b"
    },
    {
      "color": "#6ab04c"
    },
    {
      "color": "#c7ecee"
    },
    {
      "color": "#7ed6df"
    },
    {
      "color": "#e056fd"
    },
    {
      "color": "#686de0"
    },
    {
      "color": "#30336b"
    },
    {
      "color": "#95afc0"
    },
    {
      "color": "#22a6b3"
    },
    {
      "color": "#be2edd"
    },
    {
      "color": "#4834d4"
    },
    {
      "color": "#130f40"
    },
    {
      "color": "#535c68"
    }
  ]
}
,
{
  "paletteName": "Flat UI Colors British",
  "id": "flat-ui-colors-british",
  "emoji": "😔",
  "colors": [
    {
      "color": "#00a8ff"
    },
    {
      "color": "#9c88ff"
    },
    {
      "color": "#fbc531"
    },
    {
      "color": "#4cd137"
    },
    {
      "color": "#487eb0"
    },
    {
      "color": "#0097e6"
    },
    {
      "color": "#8c7ae6"
    },
    {
      "color": "#e1b12c"
    },
    {
      "color": "#44bd32"
    },
    {
      "color": "#40739e"
    },
    {
      "color": "#e84118"
    },
    {
      "color": "#f5f6fa"
    },
    {
      "color": "#7f8fa6"
    },
    {
      "color": "#273c75"
    },
    {
      "color": "#353b48"
    },
    {
      "color": "#c23616"
    },
    {
      "color": "#dcdde1"
    },
    {
      "color": "#718093"
    },
    {
      "color": "#192a56"
    },
    {
      "color": "#2f3640"
    }
  ]
}
,
{
  "paletteName": "Flat UI Colors Spanish",
  "id": "flat-ui-colors-spanish",
  "emoji": "😪",
  "colors": [
    {
      "color": "#40407a"
    },
    {
      "color": "#706fd3"
    },
    {
      "color": "#f7f1e3"
    },
    {
      "color": "#34ace0"
    },
    {
      "color": "#33d9b2"
    },
    {
      "color": "#2c2c54"
    },
    {
      "color": "#474787"
    },
    {
      "color": "#aaa69d"
    },
    {
      "color": "#227093"
    },
    {
      "color": "#218c74"
    },
    {
      "color": "#ff5252"
    },
    {
      "color": "#ff793f"
    },
    {
      "color": "#d1ccc0"
    },
    {
      "color": "#ffb142"
    },
    {
      "color": "#ffda79"
    },
    {
      "color": "#b33939"
    },
    {
      "color": "#cd6133"
    },
    {
      "color": "#84817a"
    },
    {
      "color": "#cc8e35"
    },
    {
      "color": "#ccae62"
    }
  ]
}
,
{
  "paletteName": "Flat UI Colors Indian",
  "id": "flat-ui-colors-indian",
  "emoji": "😚",
  "colors": [
    {
      "color": "#FEA47F"
    },
    {
      "color": "#25CCF7"
    },
    {
      "color": "#EAB543"
    },
    {
      "color": "#55E6C1"
    },
    {
      "color": "#CAD3C8"
    },
    {
      "color": "#F97F51"
    },
    {
      "color": "#1B9CFC"
    },
    {
      "color": "#F8EFBA"
    },
    {
      "color": "#58B19F"
    },
    {
      "color": "#2C3A47"
    },
    {
      "color": "#B33771"
    },
    {
      "color": "#3B3B98"
    },
    {
      "color": "#FD7272"
    },
    {
      "color": "#9AECDB"
    },
    {
      "color": "#D6A2E8"
    },
    {
      "color": "#6D214F"
    },
    {
      "color": "#182C61"
    },
    {
      "color": "#FC427B"
    },
    {
      "color": "#BDC581"
    },
    {
      "color": "#82589F"
    }
  ]
}
,
{
  "paletteName": "Flat UI Colors French",
  "id": "flat-ui-colors-french",
  "emoji": "😣",
  "colors": [
    {
      "color": "#fad390"
    },
    {
      "color": "#f8c291"
    },
    {
      "color": "#6a89cc"
    },
    {
      "color": "#82ccdd"
    },
    {
      "color": "#b8e994"
    },
    {
      "color": "#f6b93b"
    },
    {
      "color": "#e55039"
    },
    {
      "color": "#4a69bd"
    },
    {
      "color": "#60a3bc"
    },
    {
      "color": "#78e08f"
    },
    {
      "color": "#fa983a"
    },
    {
      "color": "#eb2f06"
    },
    {
      "color": "#1e3799"
    },
    {
      "color": "#3c6382"
    },
    {
      "color": "#38ada9"
    },
    {
      "color": "#e58e26"
    },
    {
      "color": "#b71540"
    },
    {
      "color": "#0c2461"
    },
    {
      "color": "#0a3d62"
    },
    {
      "color": "#079992"
    }
  ]
}
]

const App = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const playSound = () => {
    const audio = new Audio("/src_notify.mp3");
    audio.play();
  };

  const copyToClipboard = (colorCode) => {
    navigator.clipboard
      .writeText(colorCode)
      .then(() => {
        console.log("Color code copied to clipboard: " + colorCode);
      })
      .catch((error) => {
        console.error("Failed to copy color code: ", error);
      });
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    playSound();
    copyToClipboard(color);
  };

  const closeFullScreen = () => {
    setSelectedColor(null);
  };

  return (
    <div className="App">
      <div className="nav">
        <span>FLAT UI COLORS 2</span>
        
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#">Designer Inspiration</a>
          
          <a href="#">Subscribe</a>
        </div>
      </div>
      
      <div className="header">FLAT UI COLORS 2</div>
      <div className="container" id="colorPalettes"></div>

      {selectedColor && (
        <div
          className="full-screen-color"
          style={{ backgroundColor: selectedColor }}
          onClick={closeFullScreen}
        >
          <h1>{selectedColor}</h1>
        </div>
      )}

      {!selectedColor && (
        <div className="container">
          {palettes.map((palette) => (
            <div key={palette.id} className="palette-card">
              <div className="palette-title">
                {palette.emoji} {palette.paletteName}
              </div>
              <div className="palette">
                {palette.colors.map((color, index) => (
                  <div
                    key={index}
                    className="color-box"
                    style={{ backgroundColor: color.color }}
                    onClick={() => handleColorClick(color.color)}
                  >
                    <span>{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

   
      <div className="footer">
        <div className="footer-section">
          <strong>SHARE</strong>
          <a href="#">Send via e-mail</a>
          <a href="#">Share on Twitter</a>
          <a href="#">Share on Facebook</a>
          <a href="#">Share on Google Plus</a>
          <a href="#">Share on LinkedIn</a>
        </div>
        <div className="footer-section">
          <strong>MORE</strong>
          <a href="#">👋 Contact Me</a>
          <a href="#">📩 Subscribe</a>
          <a href="#">🚀 Submit</a>
          <a href="#">🤘 Replay Onboarding</a>
        </div>
        <div className="footer-section">
          <strong>ABOUT</strong>
          <p>Flat UI Colors 2 brought to you by Ahmet Sulek.</p>
          <a href="#">Follow me on Twitter</a> or <a href="#">Subscribe</a> to be the first to know when I launch new products.
          <p>Read the <a href="#">article on Medium</a> to learn more.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
