FSH���     tex_0        
FSHDRFlags       �  centroid in vec2 v_texcoord0;
uniform sampler2D tex_0;
uniform vec4 FSHDRFlags;
void main ()
{
  vec4 color_1;
  vec4 tmpvar_2;
  tmpvar_2 = texture (tex_0, v_texcoord0);
  color_1 = tmpvar_2;
  if ((FSHDRFlags.x > 0.0)) {
    vec3 tmpvar_3;
    tmpvar_3 = pow (((
      (mat3(0.627402, 0.329292, 0.043306, 0.069095, 0.919544, 0.01136, 0.016394, 0.088028, 0.895578) * tmpvar_2.xyz)
     * FSHDRFlags.y) * 0.0001), vec3(0.1593018, 0.1593018, 0.1593018));
    color_1.xyz = pow (((0.8359375 + 
      (18.85156 * tmpvar_3)
    ) / (vec3(1.0, 1.0, 1.0) + 
      (18.6875 * tmpvar_3)
    )), vec3(78.84375, 78.84375, 78.84375));
  };
  gl_FragColor = color_1;
}

 