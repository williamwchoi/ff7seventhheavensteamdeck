FSH���     s_tex        �   smooth in vec4 v_color0;
centroid in vec2 v_texcoord0;
uniform sampler2D s_tex;
void main ()
{
  gl_FragColor = (texture (s_tex, v_texcoord0) * v_color0);
}

 