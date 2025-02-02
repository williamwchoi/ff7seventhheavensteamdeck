VSH    ���4 d3dViewport       d3dProjection       	worldView       lightViewProjTexMatrix       �  in vec4 a_color0;
in vec4 a_position;
smooth out vec4 v_color0;
out vec4 v_position0;
out vec4 v_shadow0;
uniform mat4 d3dViewport;
uniform mat4 d3dProjection;
uniform mat4 worldView;
uniform mat4 lightViewProjTexMatrix;
void main ()
{
  vec4 tmpvar_1;
  tmpvar_1.w = 1.0;
  tmpvar_1.xyz = a_position.xyz;
  v_position0 = tmpvar_1;
  v_color0 = a_color0;
  v_shadow0 = ((lightViewProjTexMatrix * worldView) * tmpvar_1);
  gl_Position = ((d3dViewport * (d3dProjection * worldView)) * tmpvar_1);
}

 