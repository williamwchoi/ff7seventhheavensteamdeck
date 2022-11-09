FSH���     tex_0        VSFlags       FSAlphaFlags       �  smooth in vec4 v_color0;
centroid in vec2 v_texcoord0;
uniform sampler2D tex_0;
uniform vec4 VSFlags;
uniform vec4 FSAlphaFlags;
void main ()
{
  if ((VSFlags.w > 0.0)) {
    vec4 tmpvar_1;
    tmpvar_1 = texture (tex_0, v_texcoord0);
    if ((FSAlphaFlags.z > 0.0)) {
      float tmpvar_2;
      tmpvar_2 = abs(FSAlphaFlags.y);
      if ((tmpvar_2 < 1e-05)) {
        discard;
      };
      float tmpvar_3;
      tmpvar_3 = abs((FSAlphaFlags.y - 1.0));
      if (((tmpvar_3 < 1e-05) && (tmpvar_1.w >= FSAlphaFlags.x))) {
        discard;
      };
      float tmpvar_4;
      tmpvar_4 = abs((FSAlphaFlags.y - 2.0));
      if (((tmpvar_4 < 1e-05) && (tmpvar_1.w != FSAlphaFlags.x))) {
        discard;
      };
      float tmpvar_5;
      tmpvar_5 = abs((FSAlphaFlags.y - 3.0));
      if (((tmpvar_5 < 1e-05) && (tmpvar_1.w > FSAlphaFlags.x))) {
        discard;
      };
      float tmpvar_6;
      tmpvar_6 = abs((FSAlphaFlags.y - 4.0));
      if (((tmpvar_6 < 1e-05) && (tmpvar_1.w <= FSAlphaFlags.x))) {
        discard;
      };
      float tmpvar_7;
      tmpvar_7 = abs((FSAlphaFlags.y - 5.0));
      if (((tmpvar_7 < 1e-05) && (tmpvar_1.w == FSAlphaFlags.x))) {
        discard;
      };
      float tmpvar_8;
      tmpvar_8 = abs((FSAlphaFlags.y - 6.0));
      if (((tmpvar_8 < 1e-05) && (tmpvar_1.w < FSAlphaFlags.x))) {
        discard;
      };
    };
    if ((tmpvar_1.w == 0.0)) {
      discard;
    };
  } else {
    if (((v_color0.w < 0.0) && ((
      (v_color0.x + v_color0.y)
     + v_color0.z) == 0.0))) {
      discard;
    };
  };
  vec4 tmpvar_9;
  tmpvar_9.x = 0.0;
  tmpvar_9.y = 0.0;
  tmpvar_9.z = 0.0;
  tmpvar_9.w = 0.0;
  gl_FragColor = tmpvar_9;
}

 