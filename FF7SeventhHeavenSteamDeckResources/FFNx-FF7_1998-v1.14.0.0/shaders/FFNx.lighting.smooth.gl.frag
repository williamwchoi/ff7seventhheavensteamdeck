FSH���     tex_3        invViewMatrix       
shadowData       tex_7        tex_8        tex_9        lightDirData       	lightData       ambientLightData       tex_0        tex_1        tex_2        tex_5        tex_6        VSFlags       FSAlphaFlags       FSMiscFlags       
FSHDRFlags       
FSTexFlags       lightingSettings       lightingDebugData       materialData       materialScaleData       iblData       �Q  smooth in vec4 v_color0;
in vec3 v_normal0;
in vec4 v_position0;
in vec4 v_shadow0;
centroid in vec2 v_texcoord0;
uniform sampler2DShadow tex_3;
uniform mat4 invViewMatrix;
uniform vec4 shadowData;
uniform samplerCube tex_7;
uniform samplerCube tex_8;
uniform sampler2D tex_9;
uniform vec4 lightDirData;
uniform vec4 lightData;
uniform vec4 ambientLightData;
uniform sampler2D tex_0;
uniform sampler2D tex_1;
uniform sampler2D tex_2;
uniform sampler2D tex_5;
uniform sampler2D tex_6;
uniform vec4 VSFlags;
uniform vec4 FSAlphaFlags;
uniform vec4 FSMiscFlags;
uniform vec4 FSHDRFlags;
uniform vec4 FSTexFlags;
uniform vec4 lightingSettings;
uniform vec4 lightingDebugData;
uniform vec4 materialData;
uniform vec4 materialScaleData;
uniform vec4 iblData;
void main ()
{
  vec4 color_pbr_1;
  vec4 color_nml_2;
  vec4 color_3;
  vec4 tmpvar_4;
  tmpvar_4.xyz = mix(pow ((
    (v_color0.xyz + vec3(0.055, 0.055, 0.055))
   / vec3(1.055, 1.055, 1.055)), vec3(2.4, 2.4, 2.4)), (v_color0.xyz / vec3(12.92, 12.92, 12.92)), bvec3(lessThan (v_color0.xyz, vec3(0.04045, 0.04045, 0.04045))));
  tmpvar_4.w = v_color0.w;
  color_3 = tmpvar_4;
  color_nml_2 = vec4(0.0, 0.0, 0.0, 0.0);
  color_pbr_1 = vec4(0.0, 0.0, 0.0, 0.0);
  if ((VSFlags.w > 0.0)) {
    if ((FSMiscFlags.y > 0.0)) {
      vec3 tmpvar_5;
      tmpvar_5.x = (texture (tex_0, v_texcoord0).x - 0.0625);
      tmpvar_5.y = (texture (tex_1, v_texcoord0).x - 0.5);
      tmpvar_5.z = (texture (tex_2, v_texcoord0).x - 0.5);
      if ((FSMiscFlags.x > 0.0)) {
        color_3.xyz = (mat3(1.0, 1.0, 1.0, 0.0, -0.343, 1.765, 1.4, -0.711, 0.0) * tmpvar_5);
      } else {
        color_3.xyz = (mat3(1.164, 1.164, 1.164, 0.0, -0.392, 2.017, 1.596, -0.813, 0.0) * tmpvar_5);
      };
      color_3.xyz = mix(pow ((
        (color_3.xyz + vec3(0.055, 0.055, 0.055))
       / vec3(1.055, 1.055, 1.055)), vec3(2.4, 2.4, 2.4)), (color_3.xyz / vec3(12.92, 12.92, 12.92)), bvec3(lessThan (color_3.xyz, vec3(0.04045, 0.04045, 0.04045))));
      color_3.w = 1.0;
    } else {
      vec4 texture_color_6;
      vec4 tmpvar_7;
      tmpvar_7 = texture (tex_0, v_texcoord0);
      texture_color_6 = tmpvar_7;
      if ((FSTexFlags.x > 0.0)) {
        color_nml_2 = texture (tex_5, v_texcoord0);
      };
      if ((FSTexFlags.y > 0.0)) {
        color_pbr_1 = texture (tex_6, v_texcoord0);
      };
      if ((FSAlphaFlags.z > 0.0)) {
        float tmpvar_8;
        tmpvar_8 = abs(FSAlphaFlags.y);
        if ((tmpvar_8 < 1e-05)) {
          discard;
        };
        float tmpvar_9;
        tmpvar_9 = abs((FSAlphaFlags.y - 1.0));
        if (((tmpvar_9 < 1e-05) && (tmpvar_7.w >= FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_10;
        tmpvar_10 = abs((FSAlphaFlags.y - 2.0));
        if (((tmpvar_10 < 1e-05) && (tmpvar_7.w != FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_11;
        tmpvar_11 = abs((FSAlphaFlags.y - 3.0));
        if (((tmpvar_11 < 1e-05) && (tmpvar_7.w > FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_12;
        tmpvar_12 = abs((FSAlphaFlags.y - 4.0));
        if (((tmpvar_12 < 1e-05) && (tmpvar_7.w <= FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_13;
        tmpvar_13 = abs((FSAlphaFlags.y - 5.0));
        if (((tmpvar_13 < 1e-05) && (tmpvar_7.w == FSAlphaFlags.x))) {
          discard;
        };
        float tmpvar_14;
        tmpvar_14 = abs((FSAlphaFlags.y - 6.0));
        if (((tmpvar_14 < 1e-05) && (tmpvar_7.w < FSAlphaFlags.x))) {
          discard;
        };
      };
      if ((VSFlags.z > 0.0)) {
        bvec3 tmpvar_15;
        tmpvar_15 = equal (tmpvar_7.xyz, vec3(0.0, 0.0, 0.0));
        if (((tmpvar_15.x && tmpvar_15.y) && tmpvar_15.z)) {
          discard;
        };
        if ((FSHDRFlags.x <= 0.0)) {
          texture_color_6.xyz = mix(pow ((
            (tmpvar_7.xyz + vec3(0.055, 0.055, 0.055))
           / vec3(1.055, 1.055, 1.055)), vec3(2.4, 2.4, 2.4)), (tmpvar_7.xyz / vec3(12.92, 12.92, 12.92)), bvec3(lessThan (tmpvar_7.xyz, vec3(0.04045, 0.04045, 0.04045))));
        };
      };
      if ((FSMiscFlags.w > 0.0)) {
        texture_color_6.w = 1.0;
      };
      if ((texture_color_6.w == 0.0)) {
        discard;
      };
      if ((FSMiscFlags.z > 0.0)) {
        color_3 = (color_3 * texture_color_6);
      } else {
        color_3.xyz = (color_3.xyz * texture_color_6.xyz);
        color_3.w = texture_color_6.w;
      };
    };
  };
  if ((VSFlags.x > 0.0)) {
    gl_FragColor = color_3;
  } else {
    vec3 diffuseIbl_16;
    vec3 specularIbl_17;
    vec3 indirectLuminance_18;
    float ao_19;
    float specular_20;
    float metallic_21;
    float perceptualRoughness_22;
    vec3 normal_23;
    vec3 tmpvar_24;
    tmpvar_24 = (v_shadow0.xyz / v_shadow0.w);
    vec3 tmpvar_25;
    tmpvar_25 = normalize(-(v_position0.xyz));
    vec3 tmpvar_26;
    tmpvar_26 = normalize(v_normal0);
    normal_23 = tmpvar_26;
    if (((FSTexFlags.x > 0.0) && (lightingSettings.x > 0.0))) {
      vec3 tmpvar_27;
      tmpvar_27 = (((color_nml_2.xyz * 255.0) / 127.0) - 1.007874);
      float tmpvar_28;
      tmpvar_28 = fract(v_texcoord0.x);
      float tmpvar_29;
      tmpvar_29 = fract(v_texcoord0.y);
      float tmpvar_30;
      if ((tmpvar_28 < 0.5)) {
        tmpvar_30 = tmpvar_28;
      } else {
        tmpvar_30 = (1.0 - tmpvar_28);
      };
      float tmpvar_31;
      if ((tmpvar_29 < 0.5)) {
        tmpvar_31 = tmpvar_29;
      } else {
        tmpvar_31 = (1.0 - tmpvar_29);
      };
      float tmpvar_32;
      tmpvar_32 = clamp (min (1.0, (tmpvar_30 / 0.1)), 0.0, 1.0);
      float tmpvar_33;
      tmpvar_33 = (tmpvar_27.x * (tmpvar_32 * (tmpvar_32 * 
        (3.0 - (2.0 * tmpvar_32))
      )));
      float tmpvar_34;
      tmpvar_34 = clamp (min (1.0, (tmpvar_31 / 0.1)), 0.0, 1.0);
      float tmpvar_35;
      tmpvar_35 = (tmpvar_27.y * (tmpvar_34 * (tmpvar_34 * 
        (3.0 - (2.0 * tmpvar_34))
      )));
      vec3 tmpvar_36;
      tmpvar_36.x = tmpvar_33;
      tmpvar_36.y = tmpvar_35;
      tmpvar_36.z = sqrt(((1.0 - 
        (tmpvar_33 * tmpvar_33)
      ) + (tmpvar_35 * tmpvar_35)));
      vec3 p_37;
      p_37 = -(v_position0.xyz);
      vec3 tmpvar_38;
      tmpvar_38 = dFdx(p_37);
      vec3 tmpvar_39;
      tmpvar_39 = dFdy(p_37);
      vec2 tmpvar_40;
      tmpvar_40 = dFdx(v_texcoord0);
      vec2 tmpvar_41;
      tmpvar_41 = dFdy(v_texcoord0);
      vec3 tmpvar_42;
      tmpvar_42 = ((tmpvar_39.yzx * tmpvar_26.zxy) - (tmpvar_39.zxy * tmpvar_26.yzx));
      vec3 tmpvar_43;
      tmpvar_43 = ((tmpvar_26.yzx * tmpvar_38.zxy) - (tmpvar_26.zxy * tmpvar_38.yzx));
      vec3 tmpvar_44;
      tmpvar_44 = ((tmpvar_42 * tmpvar_40.x) + (tmpvar_43 * tmpvar_41.x));
      vec3 tmpvar_45;
      tmpvar_45 = ((tmpvar_42 * tmpvar_40.y) + (tmpvar_43 * tmpvar_41.y));
      float tmpvar_46;
      tmpvar_46 = inversesqrt(max (dot (tmpvar_44, tmpvar_44), dot (tmpvar_45, tmpvar_45)));
      vec3 tmpvar_47;
      vec3 tmpvar_48;
      tmpvar_47 = (tmpvar_44 * tmpvar_46);
      tmpvar_48 = (tmpvar_45 * tmpvar_46);
      mat3 tmpvar_49;
      tmpvar_49[0].x = tmpvar_47.x;
      tmpvar_49[1].x = tmpvar_47.y;
      tmpvar_49[2].x = tmpvar_47.z;
      tmpvar_49[0].y = tmpvar_48.x;
      tmpvar_49[1].y = tmpvar_48.y;
      tmpvar_49[2].y = tmpvar_48.z;
      tmpvar_49[0].z = tmpvar_26.x;
      tmpvar_49[1].z = tmpvar_26.y;
      tmpvar_49[2].z = tmpvar_26.z;
      normal_23 = normalize((tmpvar_49 * tmpvar_36));
    };
    perceptualRoughness_22 = materialData.x;
    if (((FSTexFlags.y > 0.0) && (lightingSettings.x > 0.0))) {
      perceptualRoughness_22 = (color_pbr_1.x * materialScaleData.x);
    };
    float tmpvar_50;
    tmpvar_50 = max (min (max (
      (perceptualRoughness_22 * perceptualRoughness_22)
    , 0.0), 1.0), 0.001);
    metallic_21 = materialData.y;
    if (((FSTexFlags.y > 0.0) && (lightingSettings.x > 0.0))) {
      metallic_21 = (color_pbr_1.y * materialScaleData.y);
    };
    float tmpvar_51;
    tmpvar_51 = min (1.0, metallic_21);
    metallic_21 = tmpvar_51;
    specular_20 = materialData.z;
    if (((FSTexFlags.y > 0.0) && (lightingSettings.x > 0.0))) {
      specular_20 = (color_pbr_1.z * materialScaleData.z);
    };
    float tmpvar_52;
    tmpvar_52 = min (1.0, specular_20);
    specular_20 = tmpvar_52;
    ao_19 = 1.0;
    if (((FSTexFlags.y > 0.0) && (lightingSettings.x > 0.0))) {
      ao_19 = color_pbr_1.w;
    };
    vec3 tmpvar_53;
    float sum_54;
    vec2 base_uv_55;
    float lightDepth_56;
    lightDepth_56 = (tmpvar_24.z - shadowData.x);
    float tmpvar_57;
    tmpvar_57 = (1.0/(shadowData.w));
    vec2 tmpvar_58;
    tmpvar_58 = (tmpvar_24.xy * shadowData.w);
    base_uv_55 = floor((tmpvar_58 + vec2(0.5, 0.5)));
    float tmpvar_59;
    tmpvar_59 = ((tmpvar_58.x + 0.5) - base_uv_55.x);
    float tmpvar_60;
    tmpvar_60 = ((tmpvar_58.y + 0.5) - base_uv_55.y);
    base_uv_55 = (base_uv_55 - vec2(0.5, 0.5));
    base_uv_55 = (base_uv_55 * tmpvar_57);
    float tmpvar_61;
    tmpvar_61 = ((5.0 * tmpvar_59) - 6.0);
    float tmpvar_62;
    tmpvar_62 = ((11.0 * tmpvar_59) - 28.0);
    float tmpvar_63;
    tmpvar_63 = -(((11.0 * tmpvar_59) + 17.0));
    float tmpvar_64;
    tmpvar_64 = -(((5.0 * tmpvar_59) + 1.0));
    float tmpvar_65;
    tmpvar_65 = (((
      (4.0 * tmpvar_59)
     - 5.0) / tmpvar_61) - 3.0);
    float tmpvar_66;
    tmpvar_66 = (((
      (4.0 * tmpvar_59)
     - 16.0) / tmpvar_62) - 1.0);
    float tmpvar_67;
    tmpvar_67 = ((-(
      ((7.0 * tmpvar_59) + 5.0)
    ) / tmpvar_63) + 1.0);
    float tmpvar_68;
    tmpvar_68 = ((-(tmpvar_59) / tmpvar_64) + 3.0);
    float tmpvar_69;
    tmpvar_69 = ((5.0 * tmpvar_60) - 6.0);
    float tmpvar_70;
    tmpvar_70 = ((11.0 * tmpvar_60) - 28.0);
    float tmpvar_71;
    tmpvar_71 = -(((11.0 * tmpvar_60) + 17.0));
    float tmpvar_72;
    tmpvar_72 = -(((5.0 * tmpvar_60) + 1.0));
    float tmpvar_73;
    tmpvar_73 = (((
      (4.0 * tmpvar_60)
     - 5.0) / tmpvar_69) - 3.0);
    float tmpvar_74;
    tmpvar_74 = (((
      (4.0 * tmpvar_60)
     - 16.0) / tmpvar_70) - 1.0);
    float tmpvar_75;
    tmpvar_75 = ((-(
      ((7.0 * tmpvar_60) + 5.0)
    ) / tmpvar_71) + 1.0);
    float tmpvar_76;
    tmpvar_76 = ((-(tmpvar_60) / tmpvar_72) + 3.0);
    vec2 tmpvar_77;
    tmpvar_77.x = tmpvar_65;
    tmpvar_77.y = tmpvar_73;
    vec3 tmpvar_78;
    tmpvar_78.xy = (base_uv_55 + (tmpvar_77 * tmpvar_57));
    tmpvar_78.z = lightDepth_56;
    sum_54 = ((tmpvar_61 * tmpvar_69) * texture (tex_3, tmpvar_78));
    vec2 tmpvar_79;
    tmpvar_79.x = tmpvar_66;
    tmpvar_79.y = tmpvar_73;
    vec3 tmpvar_80;
    tmpvar_80.xy = (base_uv_55 + (tmpvar_79 * tmpvar_57));
    tmpvar_80.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_62 * tmpvar_69) * texture (tex_3, tmpvar_80)));
    vec2 tmpvar_81;
    tmpvar_81.x = tmpvar_67;
    tmpvar_81.y = tmpvar_73;
    vec3 tmpvar_82;
    tmpvar_82.xy = (base_uv_55 + (tmpvar_81 * tmpvar_57));
    tmpvar_82.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_63 * tmpvar_69) * texture (tex_3, tmpvar_82)));
    vec2 tmpvar_83;
    tmpvar_83.x = tmpvar_68;
    tmpvar_83.y = tmpvar_73;
    vec3 tmpvar_84;
    tmpvar_84.xy = (base_uv_55 + (tmpvar_83 * tmpvar_57));
    tmpvar_84.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_64 * tmpvar_69) * texture (tex_3, tmpvar_84)));
    vec2 tmpvar_85;
    tmpvar_85.x = tmpvar_65;
    tmpvar_85.y = tmpvar_74;
    vec3 tmpvar_86;
    tmpvar_86.xy = (base_uv_55 + (tmpvar_85 * tmpvar_57));
    tmpvar_86.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_61 * tmpvar_70) * texture (tex_3, tmpvar_86)));
    vec2 tmpvar_87;
    tmpvar_87.x = tmpvar_66;
    tmpvar_87.y = tmpvar_74;
    vec3 tmpvar_88;
    tmpvar_88.xy = (base_uv_55 + (tmpvar_87 * tmpvar_57));
    tmpvar_88.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_62 * tmpvar_70) * texture (tex_3, tmpvar_88)));
    vec2 tmpvar_89;
    tmpvar_89.x = tmpvar_67;
    tmpvar_89.y = tmpvar_74;
    vec3 tmpvar_90;
    tmpvar_90.xy = (base_uv_55 + (tmpvar_89 * tmpvar_57));
    tmpvar_90.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_63 * tmpvar_70) * texture (tex_3, tmpvar_90)));
    vec2 tmpvar_91;
    tmpvar_91.x = tmpvar_68;
    tmpvar_91.y = tmpvar_74;
    vec3 tmpvar_92;
    tmpvar_92.xy = (base_uv_55 + (tmpvar_91 * tmpvar_57));
    tmpvar_92.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_64 * tmpvar_70) * texture (tex_3, tmpvar_92)));
    vec2 tmpvar_93;
    tmpvar_93.x = tmpvar_65;
    tmpvar_93.y = tmpvar_75;
    vec3 tmpvar_94;
    tmpvar_94.xy = (base_uv_55 + (tmpvar_93 * tmpvar_57));
    tmpvar_94.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_61 * tmpvar_71) * texture (tex_3, tmpvar_94)));
    vec2 tmpvar_95;
    tmpvar_95.x = tmpvar_66;
    tmpvar_95.y = tmpvar_75;
    vec3 tmpvar_96;
    tmpvar_96.xy = (base_uv_55 + (tmpvar_95 * tmpvar_57));
    tmpvar_96.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_62 * tmpvar_71) * texture (tex_3, tmpvar_96)));
    vec2 tmpvar_97;
    tmpvar_97.x = tmpvar_67;
    tmpvar_97.y = tmpvar_75;
    vec3 tmpvar_98;
    tmpvar_98.xy = (base_uv_55 + (tmpvar_97 * tmpvar_57));
    tmpvar_98.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_63 * tmpvar_71) * texture (tex_3, tmpvar_98)));
    vec2 tmpvar_99;
    tmpvar_99.x = tmpvar_68;
    tmpvar_99.y = tmpvar_75;
    vec3 tmpvar_100;
    tmpvar_100.xy = (base_uv_55 + (tmpvar_99 * tmpvar_57));
    tmpvar_100.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_64 * tmpvar_71) * texture (tex_3, tmpvar_100)));
    vec2 tmpvar_101;
    tmpvar_101.x = tmpvar_65;
    tmpvar_101.y = tmpvar_76;
    vec3 tmpvar_102;
    tmpvar_102.xy = (base_uv_55 + (tmpvar_101 * tmpvar_57));
    tmpvar_102.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_61 * tmpvar_72) * texture (tex_3, tmpvar_102)));
    vec2 tmpvar_103;
    tmpvar_103.x = tmpvar_66;
    tmpvar_103.y = tmpvar_76;
    vec3 tmpvar_104;
    tmpvar_104.xy = (base_uv_55 + (tmpvar_103 * tmpvar_57));
    tmpvar_104.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_62 * tmpvar_72) * texture (tex_3, tmpvar_104)));
    vec2 tmpvar_105;
    tmpvar_105.x = tmpvar_67;
    tmpvar_105.y = tmpvar_76;
    vec3 tmpvar_106;
    tmpvar_106.xy = (base_uv_55 + (tmpvar_105 * tmpvar_57));
    tmpvar_106.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_63 * tmpvar_72) * texture (tex_3, tmpvar_106)));
    vec2 tmpvar_107;
    tmpvar_107.x = tmpvar_68;
    tmpvar_107.y = tmpvar_76;
    vec3 tmpvar_108;
    tmpvar_108.xy = (base_uv_55 + (tmpvar_107 * tmpvar_57));
    tmpvar_108.z = lightDepth_56;
    sum_54 = (sum_54 + ((tmpvar_64 * tmpvar_72) * texture (tex_3, tmpvar_108)));
    vec3 tmpvar_109;
    tmpvar_109 = normalize(lightDirData.xyz);
    vec3 tmpvar_110;
    tmpvar_110 = mix ((tmpvar_52 * vec3(0.08, 0.08, 0.08)), color_3.xyz, tmpvar_51);
    vec3 tmpvar_111;
    tmpvar_111 = normalize((tmpvar_25 + tmpvar_109));
    float tmpvar_112;
    tmpvar_112 = (tmpvar_50 * tmpvar_50);
    float tmpvar_113;
    tmpvar_113 = max (dot (normal_23, tmpvar_111), 0.0);
    float tmpvar_114;
    tmpvar_114 = (((tmpvar_113 * tmpvar_113) * (tmpvar_112 - 1.0)) + 1.0);
    float tmpvar_115;
    tmpvar_115 = ((perceptualRoughness_22 + 1.0) / 8.0);
    float tmpvar_116;
    tmpvar_116 = pow ((1.0 - clamp (
      dot (tmpvar_25, tmpvar_111)
    , 0.0, 1.0)), 5.0);
    tmpvar_53 = (((
      ((sum_54 / 2704.0) * lightData.w)
     * 
      mix(pow (((lightData.xyz + vec3(0.055, 0.055, 0.055)) / vec3(1.055, 1.055, 1.055)), vec3(2.4, 2.4, 2.4)), (lightData.xyz / vec3(12.92, 12.92, 12.92)), bvec3(lessThan (lightData.xyz, vec3(0.04045, 0.04045, 0.04045))))
    ) * (
      (((1.0 - tmpvar_51) * 0.31831) * color_3.xyz)
     + 
      (((tmpvar_112 / (
        (3.141593 * tmpvar_114)
       * tmpvar_114)) * (0.25 / (
        (((clamp (
          dot (normal_23, tmpvar_25)
        , 0.0, 1.0) + 1e-05) * (1.0 - tmpvar_115)) + tmpvar_115)
       * 
        ((clamp (dot (normal_23, tmpvar_109), 0.0, 1.0) * (1.0 - tmpvar_115)) + tmpvar_115)
      ))) * ((clamp (
        (50.0 * tmpvar_110.y)
      , 0.0, 1.0) * tmpvar_116) + ((1.0 - tmpvar_116) * tmpvar_110)))
    )) * max (0.0, dot (normal_23, tmpvar_109)));
    vec3 tmpvar_117;
    tmpvar_117.x = 0.0;
    tmpvar_117.y = 0.0;
    tmpvar_117.z = 0.0;
    indirectLuminance_18 = tmpvar_117;
    vec3 tmpvar_118;
    tmpvar_118.x = 0.0;
    tmpvar_118.y = 0.0;
    tmpvar_118.z = 0.0;
    specularIbl_17 = tmpvar_118;
    vec3 tmpvar_119;
    tmpvar_119.x = 0.0;
    tmpvar_119.y = 0.0;
    tmpvar_119.z = 0.0;
    diffuseIbl_16 = tmpvar_119;
    if (((FSTexFlags.z > 0.0) && (lightingSettings.y > 0.0))) {
      vec3 I_120;
      I_120 = -(tmpvar_25);
      vec4 tmpvar_121;
      tmpvar_121.w = 0.0;
      tmpvar_121.xyz = (I_120 - (2.0 * (
        dot (normal_23, I_120)
       * normal_23)));
      vec4 tmpvar_122;
      tmpvar_122 = textureLod (tex_7, (invViewMatrix * tmpvar_121).xyz, ((iblData.x - 1.0) - (3.0 - (1.15 * 
        log2(tmpvar_50)
      ))));
      specularIbl_17 = tmpvar_122.xyz;
      vec4 tmpvar_123;
      tmpvar_123.w = 0.0;
      tmpvar_123.xyz = normal_23;
      vec4 tmpvar_124;
      tmpvar_124 = texture (tex_8, (invViewMatrix * tmpvar_123).xyz);
      diffuseIbl_16 = tmpvar_124.xyz;
      vec2 tmpvar_125;
      tmpvar_125.x = clamp (dot (normal_23, tmpvar_25), 0.0, 1.0);
      tmpvar_125.y = (1.0 - tmpvar_50);
      vec4 tmpvar_126;
      tmpvar_126 = texture (tex_9, tmpvar_125);
      indirectLuminance_18 = (((
        (((1.0 - tmpvar_51) * (tmpvar_124.xyz * color_3.xyz)) + (tmpvar_122.xyz * ((
          mix ((tmpvar_52 * vec3(0.08, 0.08, 0.08)), color_3.xyz, tmpvar_51)
         * tmpvar_126.x) + tmpvar_126.y)))
       * 
        mix(pow (((ambientLightData.xyz + vec3(0.055, 0.055, 0.055)) / vec3(1.055, 1.055, 1.055)), vec3(2.4, 2.4, 2.4)), (ambientLightData.xyz / vec3(12.92, 12.92, 12.92)), bvec3(lessThan (ambientLightData.xyz, vec3(0.04045, 0.04045, 0.04045))))
      ) * ambientLightData.w) * ao_19);
    } else {
      indirectLuminance_18 = ((ambientLightData.w * ambientLightData.xyz) * (0.31831 * color_3.xyz));
    };
    if ((lightingDebugData.z == 1.0)) {
      gl_FragColor = color_3;
    } else {
      if ((lightingDebugData.z == 2.0)) {
        vec4 tmpvar_127;
        tmpvar_127.w = 1.0;
        tmpvar_127.xyz = ((0.5 * normal_23) + 0.5);
        gl_FragColor = tmpvar_127;
      } else {
        if ((lightingDebugData.z == 3.0)) {
          vec3 tmpvar_128;
          tmpvar_128.x = perceptualRoughness_22;
          tmpvar_128.y = perceptualRoughness_22;
          tmpvar_128.z = perceptualRoughness_22;
          vec4 tmpvar_129;
          tmpvar_129.w = 1.0;
          tmpvar_129.xyz = tmpvar_128;
          gl_FragColor = tmpvar_129;
        } else {
          if ((lightingDebugData.z == 4.0)) {
            vec3 tmpvar_130;
            tmpvar_130.x = tmpvar_51;
            tmpvar_130.y = tmpvar_51;
            tmpvar_130.z = tmpvar_51;
            vec4 tmpvar_131;
            tmpvar_131.w = 1.0;
            tmpvar_131.xyz = tmpvar_130;
            gl_FragColor = tmpvar_131;
          } else {
            if ((lightingDebugData.z == 5.0)) {
              vec3 tmpvar_132;
              tmpvar_132.x = ao_19;
              tmpvar_132.y = ao_19;
              tmpvar_132.z = ao_19;
              vec4 tmpvar_133;
              tmpvar_133.w = 1.0;
              tmpvar_133.xyz = tmpvar_132;
              gl_FragColor = tmpvar_133;
            } else {
              if ((lightingDebugData.z == 6.0)) {
                vec3 tmpvar_134;
                tmpvar_134.x = tmpvar_52;
                tmpvar_134.y = tmpvar_52;
                tmpvar_134.z = tmpvar_52;
                vec4 tmpvar_135;
                tmpvar_135.w = 1.0;
                tmpvar_135.xyz = tmpvar_134;
                gl_FragColor = tmpvar_135;
              } else {
                if ((lightingDebugData.z == 7.0)) {
                  vec4 tmpvar_136;
                  tmpvar_136.w = 1.0;
                  tmpvar_136.xyz = specularIbl_17;
                  gl_FragColor = tmpvar_136;
                } else {
                  if ((lightingDebugData.z == 8.0)) {
                    vec4 tmpvar_137;
                    tmpvar_137.w = 1.0;
                    tmpvar_137.xyz = diffuseIbl_16;
                    gl_FragColor = tmpvar_137;
                  } else {
                    vec4 tmpvar_138;
                    tmpvar_138.xyz = (tmpvar_53 + indirectLuminance_18);
                    tmpvar_138.w = color_3.w;
                    gl_FragColor = tmpvar_138;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
  if ((FSHDRFlags.x <= 0.0)) {
    gl_FragColor.xyz = mix(((vec3(1.055, 1.055, 1.055) * 
      pow (gl_FragColor.xyz, vec3(0.4166667, 0.4166667, 0.4166667))
    ) - vec3(0.055, 0.055, 0.055)), (gl_FragColor.xyz * vec3(12.92, 12.92, 12.92)), bvec3(lessThan (gl_FragColor.xyz, vec3(0.0031308, 0.0031308, 0.0031308))));
  };
}

 