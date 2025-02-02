VSH    ��� 	worldView       lightViewProjMatrix       v  in vec4 a_color0;
in vec4 a_position;
in vec2 a_texcoord0;
smooth out vec4 v_color0;
centroid out vec2 v_texcoord0;
uniform mat4 worldView;
uniform mat4 lightViewProjMatrix;
void main ()
{
  vec4 color_1;
  vec4 pos_2;
  pos_2 = a_position;
  color_1 = a_color0.zyxw;
  if ((a_color0.w > 0.5)) {
    color_1.w = 0.5;
  } else {
    if ((((a_color0.z + a_color0.y) + a_color0.x) == 0.0)) {
      color_1.w = -1.0;
    };
  };
  vec4 tmpvar_3;
  tmpvar_3.w = 1.0;
  tmpvar_3.xyz = a_position.xyz;
  pos_2 = ((lightViewProjMatrix * worldView) * tmpvar_3);
  gl_Position = pos_2;
  v_color0 = color_1;
  v_texcoord0 = a_texcoord0;
}

 