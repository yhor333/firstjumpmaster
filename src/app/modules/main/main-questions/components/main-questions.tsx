import { FC } from "react";

import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const MainQuestions: FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box id={"question"} sx={{ backgroundColor: "secondary.light", py: 10 }}>
      <Container
        sx={{
          "&> .MuiPaper-root": {
            mb: 2,
          },
        }}>
        <Typography
          sx={{ fontSize: "45px", color: "secondary.main", mb: 3 }}
          component={"h5"}>
          Часто задаваемые вопросы
        </Typography>
        <Accordion
          sx={{ mt: 5 }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Когда я получу доступ к лекциям и заданиям?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Доступ к лекциям и заданиям предоставляется в зависимости от типа
              регистрации. Если вы проходите курс в режиме слушателя, то
              получите бесплатный доступ к большинству материалов курса. Чтобы
              открыть оцениваемые задания и возможность получить сертификат,
              необходимо будет приобрести прохождение с сертификатом. Это можно
              сделать во время прохождения в режиме слушателя или после него.
              Если вы не видите варианта 'Режим слушателя'.
            </Typography>
            <ul>
              <li style={{ marginBottom: 16 }}>
                Курс может не предлагаться в режиме слушателя. Попробуйте
                бесплатную пробную версию или подайте заявку на финансовую
                помощь.
              </li>
              <li>
                Курс предлагаться в режиме 'Полный курс, без сертификата'. В нем
                можно просматривать все материалы, выполнять обязательные
                задания и получить итоговую оценку. Приобрести дополнительно
                прохождение с сертификатом в таком случае нельзя.{" "}
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Что я получу, оплатив сертификацию?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Оплатив сертификацию, вы получите доступ ко всем материалам курса,
              включая оцениваемые задания. После успешного прохождения курса на
              странице ваших достижений появится электронный сертификат. Оттуда
              его можно распечатать или прикрепить к профилю LinkedIn. Просто
              ознакомиться с содержанием курса можно бесплатно.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Можно ли получить финансовую помощь?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Да. В некоторых программах обучения вы можете подать заявку на
              получение финансовой помощи или стипендии, если не можете оплатить
              регистрационный взнос. Если для выбранной вами программы
              предлагается такая возможность, вы увидите ссылку для подачи
              заявки на странице описания.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
};

export default MainQuestions;
