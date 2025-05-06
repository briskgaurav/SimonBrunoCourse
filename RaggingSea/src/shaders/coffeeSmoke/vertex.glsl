uniform float uTime;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    // Pass UV and position to fragment shader
    vUv = uv;
    vPosition = position;

    // Final vertex position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
