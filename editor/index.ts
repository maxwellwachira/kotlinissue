import IMGLYEditor, {
    EditorPreset,
    EditorSettingsModel,
    Source
} from '@imgly/editor-react-native';
import { Platform } from 'react-native';


interface EditorParams {
    userId: string;
    mediaType: "photo" | "video";
    source: Source
}

const licenseKey = Platform.OS === "ios" ?
    process.env.EXPO_PUBLIC_CESDK_LICENSE_IOS :
    process.env.EXPO_PUBLIC_CESDK_LICENSE_ANDROID


export const imglyEditor = async ({ userId, mediaType, source }: EditorParams) => {
    const settings = new EditorSettingsModel({ license: licenseKey, userId });
    const preset: EditorPreset = mediaType === "photo" ? EditorPreset.PHOTO : EditorPreset.VIDEO;
    const result = await IMGLYEditor?.openEditor(
        settings,
        source,
        preset,
        undefined
    );

    return result
};

