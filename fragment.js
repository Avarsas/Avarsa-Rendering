const fragmentShader = (r,g,b,gen) =>{return `
varying vec3 vNormal;
varying float vPerlinStrength;

void main(){
    float vPs = vPerlinStrength + 0.01;
    vPs *= 2.0;
    if(${gen} == 5){
        float vPsR = vPs + ${r} + (vNormal.y * 0.2) + (vNormal.x * 0.2) ;
        float vPsG = vPs + ${g} +  (vNormal.y * 0.5)  ;
        float vPsB = vPs + ${b} + (vNormal.y * 0.5) ;
        vPsR  = vPsR + smoothstep(vPsG,cos(vPsB),sign(vNormal.z * 2.7));
        gl_FragColor = vec4(vPsR,vPsG,vPsB, 1.0);
    }
    else if(${gen} == 4){
        float vPsR = vPs + ${r} + (vNormal.y * 0.2) + (vNormal.x * 0.2) ;
        float vPsG = vPs + ${g} +  (vNormal.y * 0.5);
        float vPsB = vPs + ${b} + (vNormal.y * 0.5);
        gl_FragColor = vec4(vPsR,vPsG,vPsB, 1.0);
    }
    else if(${gen} == 3){
        float vPsR = vPs + ${r} + (vNormal.y * 0.2);
        float vPsG = vPs + ${g} +  (vNormal.y * 0.1);
        float vPsB = vPs + ${b} ;
        gl_FragColor = vec4(vPsR,vPsG,vPsB, 1.0);
    }
    else if(${gen} == 2){
        float vPsR = vNormal.y + ${r};
        float vPsG = vPs + ${g};
        float vPsB = vPs + ${b};
        gl_FragColor = vec4(vPsR,vPsG,vPsB, 1.0);

    }
    else if(${gen} == 1){
        float vPsR = vPs + ${r};
        float vPsG = vPs + ${g};
        float vPsB = vPs + ${b};
        gl_FragColor = vec4(vPsR,vPsG,vPsB, 1.0);
    }
    else{

        float vPsR = vPs + ${r};
        float vPsG = vPs + ${g};
        float vPsB = vPs + ${b};
        float x = smoothstep(0.2,vPsR,vNormal.z * 0.5);
        gl_FragColor = vec4(x,vPsG,vPsB, 1.0);
    }
}

`
}
export default fragmentShader