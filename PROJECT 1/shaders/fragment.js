export const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  varying float noise;

  void main() {
   vec4 color1 = vec4(1.,.418,.418,1.);
   vec4 color2 = vec4(1.,.623,0.,1.);
   vec4 color3 = vec4(.3848,.9176,1.,1.);
   vec4 color4 = vec4(.6039,1.,.738,1.);

   vec4 color5=mix(color1,color2,vUv.x * sin(uTime * .1));
   vec4 color6=mix(color3,color4,vUv.x * sin(uTime * .1));
   vec4 final = mix(color5,color6,vUv.y *  cos (uTime * .1));
   final.rgb += noise;
 
    gl_FragColor = final;
  }
`;
