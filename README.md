# Avarsa-Rendering
## This an example to demonstrate how to render your NFT that you minted.

### If You dont want any explanation do the following;
- Install the files on your local machine and run them with a local live server(You can install visual studio code then install the live server plugin)
- Pick your NFT Token Number from the file provided in the repository and swap it with 4.json
- Open renderer.js and change the edition number to your token number
- Thats it enjoy it 🎉

## Details
To render a piece we will use Three js and GLSL with HTML to render your NFT on the browser.
All tokens and rendering code are hosted on IPFS therefore you can access the code URL from the blockchain once the mint is over as promised to avoid cheating.

### Files explanation
1. 'Pick Your Data From Here' folder is where you get you NFT data from, example 4.json , 1210.json, ...
2. fragment.js and vertex.js and Plane.js files are combined together with the data file(4.json, 1210.json, ...) to generate your Avarsa
3. three.module.js and OrbitControls.js are helpers to render your NFT
4. index.html is where we link our code to the browser canvas
5. renderer.js is the main rendering file that you want to interact with(to change the NFT edition and quality) 

### You can access the files from IPFS by doing the following
- Go to the smart contract: https://snowtrace.io/address/0xfe324688283b527e91cb85f17e6ac16684e66044#readContract
- Read the tokenURI and it will return the data of your token, for example:  ipfs://Qma26TA63GSUvJNLEN9WH2grRoX7dQX1e2jAF7MHW6vr96/4.json
- To access the token data we need to add a gateway to the CID, you can use pinata: https://gateway.pinata.cloud/ipfs/Qma26TA63GSUvJNLEN9WH2grRoX7dQX1e2jAF7MHW6vr96/4.json
- The code will be hosted at the following IPFS storage CID: 
- https://gateway.pinata.cloud/ipfs/QmQLwBhh2qdupKYFmdLso9AVDzoxwqVWWFyqjdYxEMgUMR/vertex.js
- https://gateway.pinata.cloud/ipfs/QmQLwBhh2qdupKYFmdLso9AVDzoxwqVWWFyqjdYxEMgUMR/fragment.js
- https://gateway.pinata.cloud/ipfs/QmQLwBhh2qdupKYFmdLso9AVDzoxwqVWWFyqjdYxEMgUMR/Plane.js
- https://gateway.pinata.cloud/ipfs/QmQLwBhh2qdupKYFmdLso9AVDzoxwqVWWFyqjdYxEMgUMR/renderer.js
- https://gateway.pinata.cloud/ipfs/QmQLwBhh2qdupKYFmdLso9AVDzoxwqVWWFyqjdYxEMgUMR/three.module.js
- https://gateway.pinata.cloud/ipfs/QmQLwBhh2qdupKYFmdLso9AVDzoxwqVWWFyqjdYxEMgUMR/OrbitControls.js

### now after you install the files from the repository we will use three js to render them
- Our vertex and fragment shaders are written in GLSL language, they are combined together with the Plane.js which generate the art piece
- In order to see the piece on your browser we need to do a couple of steps as its written in the renderer.js
```
1. Get the HTML Canvas
2. Create the scene 
3. Create a camera
4. Add the NFT piece to the scene
5. Create a webglRenderer
6. Add some controls for flex
7. run a loop to animate the piece
Obviously its already written for you in renderer.js, thus you dont need to write the above.
```
- The libraries that you need are included in the repository Three js (to handle the scene, camera and webgl rendering) and the controls file.
- All you need to edit is the edition number in the renderer.js file and then replace the 4.json file with your NFT number, so if your token number is 1211
you will replace the 4.json file with 1211.json

> ## IMPORTANT
```
To run your NFT on the browser you need to run it with a live server
```



