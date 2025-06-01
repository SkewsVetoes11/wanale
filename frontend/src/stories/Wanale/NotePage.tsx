import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import "./NotePage.css";
import TitleInput from "./TitleInput.js";
export default function NotePage() {
    return <Box sx={{ backgroundColor: blueGrey[50], width: '100%', border: '1px solid red', padding: '10px', alignSelf: 'center', alignItems: 'center', alignContent: 'center' }}>
        <Box sx={{ backgroundColor: blueGrey[50], width: '100%', border: '1px solid red', padding: '10px' }}>
            <TitleInput />
        </Box>
    </Box>
}