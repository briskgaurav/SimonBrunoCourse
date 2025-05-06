varying vec2 vUv;
float random(vec2 st){
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

void main(){
    //pattern1
    // gl_FragColor=vec4(vUv.xy,1.0,1.);
    
    //Pattern 2
    // gl_FragColor=vec4(vUv,0.0,1.);
    
    //Pattern 3
    // gl_FragColor=vec4(vec3(vUv.x),1.);
    
    //Pattern 4
    // gl_FragColor=vec4(vec3(vUv.y),1.);
    
    //Pattern 5
    // float strength = 1.-vUv.y;
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // Pattern 6
    // float strength = vUv.y * 10.;
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // pattern7
    // float strength =mod( vUv.y * 10.,1.0);
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // pattern8
    // float strength =mod( vUv.y * 10.,1.0);
    // float b = step(.5,strength);
    // gl_FragColor=vec4(vec3(b),1.);
    
    // pattern9
    // float strength =mod( vUv.y * 10.,1.0);
    // float b = step(.8,strength);
    // gl_FragColor=vec4(vec3(b),1.);
    
    // pattern10
    // float strength =mod( vUv.x * 10.,1.0);
    // float b = step(.8,strength);
    // gl_FragColor=vec4(vec3(b),1.);
    
    // pattern11
    // float strengthx = step(.8,mod( vUv.x * 10.,1.0));
    // float strengthy = step(.8,mod( vUv.y * 10.,1.0));
    // float b = strengthx + strengthy;
    // gl_FragColor=vec4(vec3(b),1.);
    
    // pattern12
    // float strengthx = step(.8,mod( vUv.x * 10.,1.0));
    // float strengthy = step(.8,mod( vUv.y * 10.,1.0));
    // float b = strengthx * strengthy;
    // gl_FragColor=vec4(vec3(b),1.);
    
    // pattern13
    // float strengthx=step(.4,mod(vUv.x*10.,1.));
    // float strengthy=step(.8,mod(vUv.y*10.,1.));
    // float b=strengthx*strengthy;
    // gl_FragColor=vec4(vec3(b),1.);
    
    // pattern14
    // float strengthx=step(.4,mod(vUv.x*10.,1.));
    // strengthx*=step(.8,mod(vUv.y*10.+.2,1.));
    // float strengthy=step(.4,mod(vUv.y*10.,1.));
    // strengthy*=step(.8,mod(vUv.x*10.+.2,1.));
    // float a=strengthx+strengthy;
    
    // gl_FragColor=vec4(vec3(a),1.);
    
    //pattern 15
    // float slope=abs(vUv.x - .5);
    // gl_FragColor=vec4(vec3(slope),1.);
    
    //pattern 16
    // float slope = max(abs(vUv.y - .5),abs(vUv.x - .5));
    // gl_FragColor=vec4(vec3(slope),1.);
    
    //pattern 17
    // float slope = min(abs(vUv.y - .5),abs(vUv.x - .5));
    // gl_FragColor=vec4(vec3(slope),1.);
    
    //pattern 18
    // float slope = step(.2,max(abs(vUv.y - .5),abs(vUv.x - .5)));
    // gl_FragColor=vec4(vec3(slope),1.);
    
    //pattern 19
    // float slope=step(.4,max(abs(vUv.y-.5),abs(vUv.x-.5)));
    // gl_FragColor=vec4(vec3(slope),1.);
    
    //pattern 20
    // float strength = round(vUv.x * 10.0) / 10.;
    // gl_FragColor=vec4(vec3(strength),1.);
    
    //pattern 21
    // float strength=floor(vUv.x*10.)/10.;
    // strength*=floor(vUv.y*10.)/10.;
    
    // gl_FragColor=vec4(vec3(strength),1.);
    
    //pattern 22
    // float random = random(vUv);
    // gl_FragColor=vec4(vec3(random),1.);
    
    //pattern 23
    
    // vec2 grid=vec2(
        //     floor(vUv.x*10.)/10.,
        //     floor((vUv.y+vUv.x-.5)*10.)/10.
        
    // );
    // float strength=random(grid);
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // pattern24
    // vec2 grid=vec2(
        //     floor(vUv.x*10.)/10.,
        //     floor((vUv.y+vUv.x-.5)*10.)/10.
    // );
    // float strength=random(grid);
    // gl_FragColor=vec4(vec3(strength),1.);
    
    //Pattern 25
    // float strength = length(vUv);
    // gl_FragColor=vec4(vec3(strength),1.);
    
    //Pattern 26
    // float strength = length(vUv - .5);
    // gl_FragColor=vec4(vec3(strength),1.);
    
    //Pattern 27
    // float strength = length(vUv - .5);
    // gl_FragColor=vec4(vec3(strength),1.);
    
    //Pattern 28
    // float strength = 1.-length(vUv - .5);
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // //Pattern 29
    // float strength = 1.-length(vUv - .5);
    // gl_FragColor=vec4(vec3(strength),1.);
    
    //Pattern 30
    // float strength = 0.01 / distance(vUv, vec2(0.5));
    // gl_FragColor=vec4(vec3(strength),1.);
    
    //Pattern 31
    // vec2 light=vec2(
        //     vUv.x*.2+.4,
        //     vUv.y
        
    // );
    // float strength=.015/distance(light,vec2(.5));
    // gl_FragColor=vec4(vec3(strength),1.);
    
    //Pattern 32
    // vec2 light=vec2(
        //     vUv.x*.2+.4,
        //     vUv.y
        
    // );
    // vec2 light2=vec2(
        //     vUv.x,
        //     vUv.y*.2+.4
        
    // );
    // float strength=.015/distance(light,vec2(.5));
    // strength*=.015/distance(light2,vec2(.5));
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // pattern33
    // float strength= 1.0-step(.2,.05/distance(vUv,vec2(.5)));
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // pattern34
    // float strength= 1.0-step(.2,.05/distance(vUv,vec2(.5)));
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // pattern35
    // float strength=abs(distance(vUv,vec2(.5)) - .20);
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // pattern36
    // float strength=step(0.01,abs(distance(vUv,vec2(.5)) - .20));
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // pattern38
    // float strength=1.0 - step(0.01,abs(distance(vUv,vec2(.5)) - .20));
    // gl_FragColor=vec4(vec3(strength),1.);
    
    // pattern39
    // vec2 wave=vec2(
    //     vUv.x + sin(vUv.y * 30.) * 0.1,
    //     vUv.y+ sin(vUv.x * 30.) * 0.1
    // );
    // float strength=1.-step(.01,abs(distance(wave,vec2(.5))-.15));
    // gl_FragColor=vec4(vec3(strength),1.);

    //pattern40
    // vec2 wave=vec2(
    //     vUv.x,
    //     vUv.y+ sin(vUv.x * 30.) * 0.1
    // );
    // float strength=1.-step(.01,abs(distance(wave,vec2(.5))-.15));
    // gl_FragColor=vec4(vec3(strength),1.);
    // //pattern41
    // vec2 wave=vec2(
    //     vUv.x+ sin(vUv.y * 90.) * 0.1,
    //     vUv.y+ sin(vUv.x * 90.) * 0.1
    // );
    // float strength=1.-step(.01,abs(distance(wave,vec2(.5))-.15));
    // gl_FragColor=vec4(vec3(strength),1.);
    

    // //pattern42
    // float strength=atan(vUv.x, vUv.y);
    // gl_FragColor=vec4(vec3(strength),1.);
    

    // //pattern43
    float strength=atan(vUv.x -.5, vUv.y -.5);
    gl_FragColor=vec4(vec3(strength),1.);
    
}
