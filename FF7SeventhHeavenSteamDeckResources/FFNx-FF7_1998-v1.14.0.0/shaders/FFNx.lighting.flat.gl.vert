VSH    ��� u_proj       d3dViewport       d3dProjection       	worldView       normalMatrix       lightViewProjTexMatrix       VSFlags       lightingDebugData         in vec4 a_color0;
in vec3 a_normal;
in vec4 a_position;
in vec2 a_texcoord0;
flat out vec4 v_color0;
out vec3 v_normal0;
out vec4 v_position0;
out vec4 v_shadow0;
centroid out vec2 v_texcoord0;
uniform mat4 u_proj;
uniform mat4 d3dViewport;
uniform mat4 d3dProjection;
uniform mat4 worldView;
uniform mat4 normalMatrix;
uniform mat4 lightViewProjTexMatrix;
uniform vec4 VSFlags;
uniform vec4 lightingDebugData;
void main ()
{
  vec2 coords_1;
  vec4 color_2;
  vec4 pos_3;
  pos_3 = a_position;
  coords_1 = a_texcoord0;
  color_2 = a_color0.zyxw;
  if ((VSFlags.x > 0.0)) {
    pos_3.w = (1.0/(a_position.w));
    pos_3.xyz = (a_position.xyz * pos_3.w);
    pos_3 = (u_proj * pos_3);
    if ((lightingDebugData.x > 0.0)) {
      vec4 tmpvar_4;
      tmpvar_4.x = 0.0;
      tmpvar_4.y = 0.0;
      tmpvar_4.z = 0.0;
      tmpvar_4.w = 0.0;
      pos_3 = tmpvar_4;
    };
  } else {
    vec4 tmpvar_5;
    tmpvar_5.w = 1.0;
    tmpvar_5.xyz = pos_3.xyz;
    v_position0 = (worldView * tmpvar_5);
    v_shadow0 = (lightViewProjTexMatrix * v_position0);
    vec4 tmpvar_6;
    tmpvar_6.w = 0.0;
    tmpvar_6.xyz = a_normal;
    v_normal0 = (normalMatrix * tmpvar_6).xyz;
    pos_3 = ((d3dViewport * d3dProjection) * v_position0);
    if ((a_color0.w > 0.5)) {
      color_2.w = 0.5;
    };
  };
  if ((VSFlags.y == 4.0)) {
    color_2.w = 1.0;
  } else {
    if ((VSFlags.y == 3.0)) {
      color_2.w = 0.25;
    };
  };
  if ((VSFlags.z > 0.0)) {
    coords_1.y = (1.0 - a_texcoord0.y);
  };
  gl_Position = pos_3;
  v_color0 = color_2;
  v_texcoord0 = coords_1;
}

 