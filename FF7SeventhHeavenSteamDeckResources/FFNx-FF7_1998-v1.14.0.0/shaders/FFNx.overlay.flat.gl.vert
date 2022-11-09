VSH    ��� u_viewTexel       �  in vec4 a_color0;
in vec4 a_position;
in vec2 a_texcoord0;
flat out vec4 v_color0;
centroid out vec2 v_texcoord0;
uniform vec4 u_viewTexel;
void main ()
{
  vec2 tmpvar_1;
  tmpvar_1 = ((2.0 * a_position.xy) * u_viewTexel.xy);
  vec4 tmpvar_2;
  tmpvar_2.zw = vec2(0.0, 1.0);
  tmpvar_2.x = (tmpvar_1.x - 1.0);
  tmpvar_2.y = (1.0 - tmpvar_1.y);
  gl_Position = tmpvar_2;
  v_texcoord0 = a_texcoord0;
  v_color0 = a_color0;
}

 