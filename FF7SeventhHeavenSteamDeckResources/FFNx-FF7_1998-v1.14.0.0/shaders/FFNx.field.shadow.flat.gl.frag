FSH���4     tex_3        fieldShadowData       
shadowData       lightingDebugData       �  flat in vec4 v_color0;
in vec4 v_shadow0;
uniform sampler2DShadow tex_3;
uniform vec4 fieldShadowData;
uniform vec4 shadowData;
uniform vec4 lightingDebugData;
void main ()
{
  float shadowFactor_1;
  vec4 tmpvar_2;
  tmpvar_2 = (v_shadow0 / v_shadow0.w);
  float sum_3;
  vec2 base_uv_4;
  float lightDepth_5;
  lightDepth_5 = (tmpvar_2.z - shadowData.x);
  float tmpvar_6;
  tmpvar_6 = (1.0/(shadowData.w));
  vec2 tmpvar_7;
  tmpvar_7 = (tmpvar_2.xy * shadowData.w);
  base_uv_4 = floor((tmpvar_7 + vec2(0.5, 0.5)));
  float tmpvar_8;
  tmpvar_8 = ((tmpvar_7.x + 0.5) - base_uv_4.x);
  float tmpvar_9;
  tmpvar_9 = ((tmpvar_7.y + 0.5) - base_uv_4.y);
  base_uv_4 = (base_uv_4 - vec2(0.5, 0.5));
  base_uv_4 = (base_uv_4 * tmpvar_6);
  float tmpvar_10;
  tmpvar_10 = ((5.0 * tmpvar_8) - 6.0);
  float tmpvar_11;
  tmpvar_11 = ((11.0 * tmpvar_8) - 28.0);
  float tmpvar_12;
  tmpvar_12 = -(((11.0 * tmpvar_8) + 17.0));
  float tmpvar_13;
  tmpvar_13 = -(((5.0 * tmpvar_8) + 1.0));
  float tmpvar_14;
  tmpvar_14 = (((
    (4.0 * tmpvar_8)
   - 5.0) / tmpvar_10) - 3.0);
  float tmpvar_15;
  tmpvar_15 = (((
    (4.0 * tmpvar_8)
   - 16.0) / tmpvar_11) - 1.0);
  float tmpvar_16;
  tmpvar_16 = ((-(
    ((7.0 * tmpvar_8) + 5.0)
  ) / tmpvar_12) + 1.0);
  float tmpvar_17;
  tmpvar_17 = ((-(tmpvar_8) / tmpvar_13) + 3.0);
  float tmpvar_18;
  tmpvar_18 = ((5.0 * tmpvar_9) - 6.0);
  float tmpvar_19;
  tmpvar_19 = ((11.0 * tmpvar_9) - 28.0);
  float tmpvar_20;
  tmpvar_20 = -(((11.0 * tmpvar_9) + 17.0));
  float tmpvar_21;
  tmpvar_21 = -(((5.0 * tmpvar_9) + 1.0));
  float tmpvar_22;
  tmpvar_22 = (((
    (4.0 * tmpvar_9)
   - 5.0) / tmpvar_18) - 3.0);
  float tmpvar_23;
  tmpvar_23 = (((
    (4.0 * tmpvar_9)
   - 16.0) / tmpvar_19) - 1.0);
  float tmpvar_24;
  tmpvar_24 = ((-(
    ((7.0 * tmpvar_9) + 5.0)
  ) / tmpvar_20) + 1.0);
  float tmpvar_25;
  tmpvar_25 = ((-(tmpvar_9) / tmpvar_21) + 3.0);
  vec2 tmpvar_26;
  tmpvar_26.x = tmpvar_14;
  tmpvar_26.y = tmpvar_22;
  vec3 tmpvar_27;
  tmpvar_27.xy = (base_uv_4 + (tmpvar_26 * tmpvar_6));
  tmpvar_27.z = lightDepth_5;
  sum_3 = ((tmpvar_10 * tmpvar_18) * texture (tex_3, tmpvar_27));
  vec2 tmpvar_28;
  tmpvar_28.x = tmpvar_15;
  tmpvar_28.y = tmpvar_22;
  vec3 tmpvar_29;
  tmpvar_29.xy = (base_uv_4 + (tmpvar_28 * tmpvar_6));
  tmpvar_29.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_11 * tmpvar_18) * texture (tex_3, tmpvar_29)));
  vec2 tmpvar_30;
  tmpvar_30.x = tmpvar_16;
  tmpvar_30.y = tmpvar_22;
  vec3 tmpvar_31;
  tmpvar_31.xy = (base_uv_4 + (tmpvar_30 * tmpvar_6));
  tmpvar_31.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_12 * tmpvar_18) * texture (tex_3, tmpvar_31)));
  vec2 tmpvar_32;
  tmpvar_32.x = tmpvar_17;
  tmpvar_32.y = tmpvar_22;
  vec3 tmpvar_33;
  tmpvar_33.xy = (base_uv_4 + (tmpvar_32 * tmpvar_6));
  tmpvar_33.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_13 * tmpvar_18) * texture (tex_3, tmpvar_33)));
  vec2 tmpvar_34;
  tmpvar_34.x = tmpvar_14;
  tmpvar_34.y = tmpvar_23;
  vec3 tmpvar_35;
  tmpvar_35.xy = (base_uv_4 + (tmpvar_34 * tmpvar_6));
  tmpvar_35.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_10 * tmpvar_19) * texture (tex_3, tmpvar_35)));
  vec2 tmpvar_36;
  tmpvar_36.x = tmpvar_15;
  tmpvar_36.y = tmpvar_23;
  vec3 tmpvar_37;
  tmpvar_37.xy = (base_uv_4 + (tmpvar_36 * tmpvar_6));
  tmpvar_37.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_11 * tmpvar_19) * texture (tex_3, tmpvar_37)));
  vec2 tmpvar_38;
  tmpvar_38.x = tmpvar_16;
  tmpvar_38.y = tmpvar_23;
  vec3 tmpvar_39;
  tmpvar_39.xy = (base_uv_4 + (tmpvar_38 * tmpvar_6));
  tmpvar_39.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_12 * tmpvar_19) * texture (tex_3, tmpvar_39)));
  vec2 tmpvar_40;
  tmpvar_40.x = tmpvar_17;
  tmpvar_40.y = tmpvar_23;
  vec3 tmpvar_41;
  tmpvar_41.xy = (base_uv_4 + (tmpvar_40 * tmpvar_6));
  tmpvar_41.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_13 * tmpvar_19) * texture (tex_3, tmpvar_41)));
  vec2 tmpvar_42;
  tmpvar_42.x = tmpvar_14;
  tmpvar_42.y = tmpvar_24;
  vec3 tmpvar_43;
  tmpvar_43.xy = (base_uv_4 + (tmpvar_42 * tmpvar_6));
  tmpvar_43.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_10 * tmpvar_20) * texture (tex_3, tmpvar_43)));
  vec2 tmpvar_44;
  tmpvar_44.x = tmpvar_15;
  tmpvar_44.y = tmpvar_24;
  vec3 tmpvar_45;
  tmpvar_45.xy = (base_uv_4 + (tmpvar_44 * tmpvar_6));
  tmpvar_45.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_11 * tmpvar_20) * texture (tex_3, tmpvar_45)));
  vec2 tmpvar_46;
  tmpvar_46.x = tmpvar_16;
  tmpvar_46.y = tmpvar_24;
  vec3 tmpvar_47;
  tmpvar_47.xy = (base_uv_4 + (tmpvar_46 * tmpvar_6));
  tmpvar_47.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_12 * tmpvar_20) * texture (tex_3, tmpvar_47)));
  vec2 tmpvar_48;
  tmpvar_48.x = tmpvar_17;
  tmpvar_48.y = tmpvar_24;
  vec3 tmpvar_49;
  tmpvar_49.xy = (base_uv_4 + (tmpvar_48 * tmpvar_6));
  tmpvar_49.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_13 * tmpvar_20) * texture (tex_3, tmpvar_49)));
  vec2 tmpvar_50;
  tmpvar_50.x = tmpvar_14;
  tmpvar_50.y = tmpvar_25;
  vec3 tmpvar_51;
  tmpvar_51.xy = (base_uv_4 + (tmpvar_50 * tmpvar_6));
  tmpvar_51.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_10 * tmpvar_21) * texture (tex_3, tmpvar_51)));
  vec2 tmpvar_52;
  tmpvar_52.x = tmpvar_15;
  tmpvar_52.y = tmpvar_25;
  vec3 tmpvar_53;
  tmpvar_53.xy = (base_uv_4 + (tmpvar_52 * tmpvar_6));
  tmpvar_53.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_11 * tmpvar_21) * texture (tex_3, tmpvar_53)));
  vec2 tmpvar_54;
  tmpvar_54.x = tmpvar_16;
  tmpvar_54.y = tmpvar_25;
  vec3 tmpvar_55;
  tmpvar_55.xy = (base_uv_4 + (tmpvar_54 * tmpvar_6));
  tmpvar_55.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_12 * tmpvar_21) * texture (tex_3, tmpvar_55)));
  vec2 tmpvar_56;
  tmpvar_56.x = tmpvar_17;
  tmpvar_56.y = tmpvar_25;
  vec3 tmpvar_57;
  tmpvar_57.xy = (base_uv_4 + (tmpvar_56 * tmpvar_6));
  tmpvar_57.z = lightDepth_5;
  sum_3 = (sum_3 + ((tmpvar_13 * tmpvar_21) * texture (tex_3, tmpvar_57)));
  shadowFactor_1 = (fieldShadowData.x + ((1.0 - fieldShadowData.x) * (sum_3 / 2704.0)));
  if ((lightingDebugData.y > 0.0)) {
    vec4 tmpvar_58;
    tmpvar_58.w = 1.0;
    tmpvar_58.xyz = (v_color0.xyz * shadowFactor_1);
    gl_FragColor = tmpvar_58;
  } else {
    vec4 tmpvar_59;
    tmpvar_59.xyz = vec3(0.0, 0.0, 0.0);
    tmpvar_59.w = ((1.0 - shadowFactor_1) * v_color0.w);
    gl_FragColor = tmpvar_59;
  };
}

 