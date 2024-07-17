import { Project } from "../../App";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { SyntheticEvent, useState } from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, .05)",
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

export function CardExpansable({
  name,
  description,
  started_at,
  tasks,
}: Project) {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const [innerExpaned, setInnerExpanded] = useState<string | false>(
    "innerPanel"
  );

  const handleChange =
    (panel: string) => (_: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const handleInnerChange =
    (panel: string) => (_: SyntheticEvent, newExpanded: boolean) => {
      setInnerExpanded(newExpanded ? panel : false);
    };

  return (
    <div className="mt-6">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h5">Projeto: {name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
          <Typography className="block mt-2 text-lime-600">
            Início em: {started_at}
          </Typography>
        </AccordionDetails>

        {tasks?.map((task, i) => (
          <Accordion
            disabled={!!task?.finished_at}
            key={task.id}
            expanded={innerExpaned === "innerPanel"}
            onChange={handleInnerChange("innerPanel")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>
                Tarefa {i + 1}: {task.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{task.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Accordion>
    </div>
  );
}
