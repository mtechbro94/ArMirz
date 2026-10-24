export interface Article {
  slug: string;
  title: string;
  category: "Generative AI" | "AI Agents" | "Explainable AI" | "Data Science";
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const articlesData: Article[] = [
  {
    slug: "local-llm-tool-calling-ollama-langchain",
    title: "Tool Calling with Local LLMs: Orchestrating Ollama with LangChain and Pydantic",
    category: "Generative AI",
    date: "October 2026",
    readTime: "7 min read",
    excerpt:
      "A complete guide to configuring local open-weights LLMs to reliably generate structured arguments and execute custom Python functions without external cloud APIs.",
    tags: ["Ollama", "LangChain", "Local LLMs", "Tool Calling", "Pydantic"],
    content: `
### Why Local Tool Calling Matters

For enterprise deployments with strict privacy compliance, routing confidential data to proprietary cloud APIs is often prohibited. Running models locally via Ollama allows organizations to retain complete data sovereignty. However, making local models reliably execute structured tool calls requires strict schema definition and constrained decoding.

### Defining Tools with Pydantic

When giving an LLM access to external tools (such as database query execution or weather lookups), define schemas with strict type hints and docstrings:

\`\`\`python
from langchain_core.tools import tool
from pydantic import BaseModel, Field

class DatabaseQueryInput(BaseModel):
    query: str = Field(description="The sanitized SQL query to execute")
    limit: int = Field(default=10, description="Maximum rows to retrieve")

@tool("execute_sql_query", args_schema=DatabaseQueryInput)
def execute_sql_query(query: str, limit: int = 10) -> str:
    """Executes a validated read-only SQL query against the analytics database."""
    # Implementation logic with security checks
    return f"Executed {query} with limit {limit}"
\`\`\`

### Binding Tools to Local Ollama Models

With modern versions of Ollama (supporting function calling in models like Llama 3.1, Mistral, and Qwen 2.5), binding tools is seamless:

\`\`\`python
from langchain_ollama import ChatOllama

llm = ChatOllama(
    model="llama3.1:8b",
    temperature=0.0
)

llm_with_tools = llm.bind_tools([execute_sql_query])
response = llm_with_tools.invoke("Show me the top 5 revenue generating products this quarter")
print(response.tool_calls)
\`\`\`

### Key Takeaways for Production

1. Always set temperature to 0.0 for deterministic tool argument emission.
2. Provide explicit field descriptions in Pydantic models; the LLM uses them as the semantic prompt.
3. Validate and sanitize all tool arguments before invoking backend execution to prevent injection attacks.
`,
  },
  {
    slug: "demystifying-grad-cam-explainable-ai",
    title: "Demystifying Grad-CAM: Visualizing Deep CNN Decisions in Medical Imaging",
    category: "Explainable AI",
    date: "September 2026",
    readTime: "8 min read",
    excerpt:
      "How Gradient-weighted Class Activation Mapping creates high-resolution visual explanations for convolutional neural networks in clinical MRI diagnostics.",
    tags: ["Explainable AI", "Grad-CAM", "Computer Vision", "Healthcare AI", "PyTorch"],
    content: `
### The Black Box Dilemma in Clinical AI

Deep Convolutional Neural Networks achieve exceptional accuracy in medical image classification. However, without spatial localization explaining *why* a particular label was predicted, clinicians cannot verify whether the model recognized actual pathology or spurious background artifacts.

### The Mechanics of Grad-CAM

Gradient-weighted Class Activation Mapping (Grad-CAM) uses the gradients of any target concept flowing into the final convolutional layer to produce a coarse localization map highlighting important regions in the image:

1. **Feature Extraction:** Pass the MRI through the convolutional backbone to the last feature maps $A^k$.
2. **Gradient Computation:** Calculate the gradient of the score for class $c$ ($y^c$) with respect to feature map activations $A^k$.
3. **Global Average Pooling:** Pool gradients over width and height to capture neuron importance weights $\\alpha_k^c$:
$$\\alpha_k^c = \\frac{1}{Z} \\sum_i \\sum_j \\frac{\\partial y^c}{\\partial A_{i,j}^k}$$
4. **Weighted Combination & ReLU:** Combine feature maps and apply ReLU to isolate features with a positive influence on the target class:
$$L_{\\text{Grad-CAM}}^c = \\text{ReLU}\\left(\\sum_k \\alpha_k^c A^k\\right)$$

### Clinical Verification

In our brain tumor classification research (published in IJSR), Grad-CAM overlays verified that the model localized the glioma core, enhancing radiologist trust and establishing an audit trail for clinical decision support.
`,
  },
  {
    slug: "supervisor-pattern-multi-agent-langgraph",
    title: "Architecting Multi-Agent Systems: The Supervisor Pattern in LangGraph",
    category: "AI Agents",
    date: "August 2026",
    readTime: "9 min read",
    excerpt:
      "Designing resilient, stateful multi-agent systems where a central supervisor coordinates specialized sub-agents with tools, schema validation, and error recovery.",
    tags: ["LangGraph", "Multi-Agent", "LangChain", "Autonomous Agents", "FastAPI"],
    content: `
### Why Single-Agent Systems Break Down

As LLM systems take on more tasks, stuffing twenty different tools into a single agent prompt causes tool selection hallucination, prompt confusion, and high token overhead.

### The Hierarchical Supervisor Pattern

In our **SmileSync-AI** architecture, we decoupled monolithic logic into specialized agents:
- **Supervisor Agent:** Orchestrates conversation flow, detects user intent, and delegates tasks.
- **Info Agent:** Answers clinic policies, operating hours, and practitioner credentials.
- **Booking Agent:** Checks doctor schedule availability and books appointment slots.
- **Cancellation/Reschedule Agent:** Handles state mutations with transactional confirmation.

### State Graph Definition

\`\`\`python
from langgraph.graph import StateGraph, END
from typing import TypedDict, Annotated, Sequence
import operator

class AgentState(TypedDict):
    messages: Annotated[Sequence[str], operator.add]
    next_worker: str
    appointment_id: str

workflow = StateGraph(AgentState)
workflow.add_node("supervisor", supervisor_node)
workflow.add_node("booking_worker", booking_worker_node)
workflow.add_node("info_worker", info_worker_node)

workflow.add_conditional_edges(
    "supervisor",
    lambda state: state["next_worker"],
    {
        "booking": "booking_worker",
        "info": "info_worker",
        "FINISH": END
    }
)
\`\`\`

By scoping each worker's prompt and toolset to a single responsibility, reliability increases exponentially while debugging becomes deterministic.
`,
  },
];
