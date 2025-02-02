FSH���     tex_0        tex_1        tex_2        VSFlags       FSAlphaFlags       FSMiscFlags       
FSHDRFlags       _  flat in vec4 v_color0;
centroid in vec2 v_texcoord0;
uniform sampler2D tex_0;
uniform sampler2D tex_1;
uniform sampler2D tex_2;
uniform vec4 VSFlags;
uniform vec4 FSAlphaFlags;
uniform vec4 FSMiscFlags;
uniform vec4 FSHDRFlags;
void main ()
{
  vec4 color_1;
  vec4 tmpvar_2;
  tmpvar_2.xyz = mix(pow ((
    (v_color0.xyz + vec3(0.055, 0.055, 0.055))
   / vec3(1.055, 1.055, 1.055)), vec3(2.4, 2.4, 2.4)), (v_color0.xyz / vec3(12.92, 12.92, 12.92)), bvec3(lessThan (v_color0.xyz, vec3(0.04045, 0.04045, 0.04045))));
  tmpvar_2.w = v_color0.w;
  color_1 = tmpvar_2;
  if ((VSFlags.w > 0.0)) {
    if ((FSMiscFlags.y > 0.0)) {
      vec3 tmpvar_3;
      tmpvar_3.x = (texture (tex_0, v_texcoord0).x - 0.0625);
      tmpvar_3.y = (texture (tex_1, v_texcoord0).x - 0.5);
      tmpvar_3.z = (texture (tex_2, v_texcoord0).x - 0.5);
      if ((FSMiscFlags.x > 0.0)) {
        color_1.xyz = (mat3(1.0, 1.0, 1.0, 0.0, -0.343, 1.765, 1.4, -0.711, 0.0) * tmpvar_3);
      } else {
        color_1.xyz = (mat3(1.164, 1.164, 1.164, 0.0, -0.392, 2.017, 1.596, -0.813, 0.0) * tmpvar_3);
      };
      color_1.xyz = mix(pow ((
        (color_1.xyz + vec3(0.055, 0.055, 0.055))
       / vec3(1.055, 1.055, 1.055)), vec3(2.4, 2.4, 2.4)), (color_1.xyz / vec3(12.92, 12.92, 12.92)), bvec3(lessThan (color_1.xyz, vec3(0.04045, 0.04045, 0.04045))));
      color_1.w = 1.0;
    } else {
      vec4 texture_color_4;
      vec4 tmpvar_5;
      tmpvar_5 = texture (tex_0, v_texcoord0);
      texture_color_4 = tmpvar_5;
      if ((FSAlphaFlags.z > 0.0)) {
        float tmpvar_6;
        tmpvar_6 = abs(FSAlphaFlags.y);
        if ((tmpvar_6 < 1e-05)) {
          discard;
        };
        float tmpvar_7;
        tmpvar_7 = abs((FSAlphaFlags.y - 1.0));
        if (((tmpvar_7 < 1e-05) && (tmpvar_5.w >= FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_8;
        tmpvar_8 = abs((FSAlphaFlags.y - 2.0));
        if (((tmpvar_8 < 1e-05) && (tmpvar_5.w != FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_9;
        tmpvar_9 = abs((FSAlphaFlags.y - 3.0));
        if (((tmpvar_9 < 1e-05) && (tmpvar_5.w > FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_10;
        tmpvar_10 = abs((FSAlphaFlags.y - 4.0));
        if (((tmpvar_10 < 1e-05) && (tmpvar_5.w <= FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_11;
        tmpvar_11 = abs((FSAlphaFlags.y - 5.0));
        if (((tmpvar_11 < 1e-05) && (tmpvar_5.w == FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_12;
        tmpvar_12 = abs((FSAlphaFlags.y - 6.0));
        if (((tmpvar_12 < 1e-05) && (tmpvar_5.w < FSAlphaFlags.x))) {
          discard;
        };
      };
      if ((VSFlags.z > 0.0)) {
        bvec3 tmpvar_13;
        tmpvar_13 = equal (tmpvar_5.xyz, vec3(0.0, 0.0, 0.0));
        if (((tmpvar_13.x && tmpvar_13.y) && tmpvar_13.z)) {
          discard;
        };
        if ((FSHDRFlags.x <= 0.0)) {
          texture_color_4.xyz = mix(pow ((
            (tmpvar_5.xyz + vec3(0.055, 0.055, 0.055))
           / vec3(1.055, 1.055, 1.055)), vec3(2.4, 2.4, 2.4)), (tmpvar_5.xyz / vec3(12.92, 12.92, 12.92)), bvec3(lessThan (tmpvar_5.xyz, vec3(0.04045, 0.04045, 0.04045))));
        };
      };
      if ((FSMiscFlags.w > 0.0)) {
        texture_color_4.w = 1.0;
      };
      if ((texture_color_4.w == 0.0)) {
        discard;
      };
      if ((FSMiscFlags.z > 0.0)) {
        color_1 = (color_1 * texture_color_4);
      } else {
        color_1.xyz = (color_1.xyz * texture_color_4.xyz);
        color_1.w = texture_color_4.w;
      };
    };
  };
  if ((FSHDRFlags.x <= 0.0)) {
    color_1.xyz = mix(((vec3(1.055, 1.055, 1.055) * 
      pow (color_1.xyz, vec3(0.4166667, 0.4166667, 0.4166667))
    ) - vec3(0.055, 0.055, 0.055)), (color_1.xyz * vec3(12.92, 12.92, 12.92)), bvec3(lessThan (color_1.xyz, vec3(0.0031308, 0.0031308, 0.0031308))));
  };
  gl_FragColor = color_1;
}

 