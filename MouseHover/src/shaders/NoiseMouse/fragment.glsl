uniform float uTime;
uniform float uHover;
uniform vec2 uMouse;

varying vec2 vUv;
varying float vNoise;

void main() {
  // Compute distance from mouse
  float dist = distance(vUv, uMouse);

  // Compute hover influence
  float influence = smoothstep(0.1, 0.0, dist) * uHover;

  // Color based on noise
  vec3 color = vec3(0.5 + 0.1 * vNoise); // grayscale noise

  // Use influence as alpha
  float alpha = influence;

  gl_FragColor = vec4(color, alpha);
}
